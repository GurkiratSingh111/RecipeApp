const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
import pool from "./db/connect";
// const {Pool} = require("pg");
  
// const pool = new Pool({
//     user: "postgres",
//     host: "db",
//     password: "root",
// })

const PORT = 8080;
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function getCurrentTime(){
    date = new Date();
    console.log("The date is here", date);
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return `${date.getFullYear()}, ${date.getDate()}th ${month[date.getMonth()]}, ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
}

const helper = {
    recipeDatabase: async function() {
        const q = `CREATE TABLE IF NOT EXISTS recipes(
            id SERIAL PRIMARY KEY, 
            name VARCHAR(100),
            instructions TEXT, 
            timeLastModified VARCHAR(300)
            )`;
        await pool.query(q)
    },
    ingredientsDatabase: async function() {
        const q = `CREATE TABLE IF NOT EXISTS ingredients(
            iid SERIAL PRIMARY KEY, 
            recipeId INT, name VARCHAR(50), 
            FOREIGN KEY(recipeId) REFERENCES recipes(id)
            ON DELETE CASCADE)`
        await pool.query(q);
    },
    add: async function(name, instructions, ingredients){
        date = getCurrentTime();

        const q = `INSERT INTO 
                    recipes(name, instructions, timeLastModified) 
                    VALUES($1, $2, $3) RETURNING *`;
        const value = await pool.query(q,[name,instructions, date]);
        const recipeId = value.rows[0].id;
        const ingredientList = ingredients.split(",").filter( function(e) { return e.trim().length > 0; } );
        for(let i = 0; i < ingredientList.length; i++){
            const q = `INSERT INTO ingredients(recipeId, name) VALUES($1,$2)`;
            await pool.query(q,[recipeId, ingredientList[i]]);
        }
    },
    delete: async function(id){
        const q = "DELETE FROM recipes WHERE id = $1";
        await pool.query(q,[id]);
    },
    update: async function(id,name, ingredients, instructions){
        date = getCurrentTime();
        const q1 = `UPDATE recipes 
                    SET name = $1, 
                    instructions = $2,
                    timeLastModified = $3
                    WHERE id = $4`;

        await pool.query(q1,[name,instructions,date,id]);

        const q2 = `DELETE FROM ingredients
                    WHERE recipeId = $1`
        await pool.query(q2,[id]);

        let ingredientList = ingredients.split(",").filter( function(e) { return e.trim().length > 0; } ).map(e=>e.trim())
        ingredientList = ingredientList.map(e=>e.trim())

        for(let i = 0; i < ingredientList.length; i++){
            const q3 = `INSERT INTO ingredients(recipeId, name)
                        VALUES($1,$2)`
            await pool.query(q3,[id, ingredientList[i]]);
        }
       
    },
    allRecipes: async function(){
        // const q = `SELECT r.id, r.name, r.instructions, r.timeLastModified, i.name as ingredientsName
        //         FROM recipes as r, ingredients as i
        //         WHERE r.id = i.recipeId`;
        const q =  `SELECT r.name, r.id
                    FROM recipes as r`;
        const result = await pool.query(q);
        return result.rows;
    },
    allIngredients: async function(){
        const q = "SELECT * FROM ingredients";
        const result = await pool.query(q);
        return result.rows;
    },

    recipeById: async function(id){
         const q1 = `SELECT *
                    FROM recipes as r
                    WHERE r.id = $1`;
        //const q = "SELECT * FROM recipes WHERE id = $1";
        let result1 = await pool.query(q1,[id]);
        result1 =result1.rows[0];

        const q2 = `SELECT i.name
                    FROM ingredients as i
                    WHERE i.recipeId = $1`;
        let result2 = await pool.query(q2,[id]);
        result2 = result2.rows;
        return {result1, result2};
    },
}

app.post("/add", (req,res)=>{
    const {name, instructions, ingredients} = req.body;
    helper.add(name, instructions, ingredients).then(()=>{
        res.send("Recipe added");
    }).catch((err)=>{
        res.send("Error adding recipe");
    })
})

app.delete("/delete/:id", (req,res)=>{
    const id = req.params.id;
    helper.delete(id).then(()=>{
        res.send("Recipe deleted");
    }).catch((err)=>{
        res.send("Error deleting recipe");
    })

})

app.post("/update/:id", (req,res)=>{
    const id = req.params.id;
    const {name, ingredients, instructions} = req.body;
    helper.update(id, name, ingredients, instructions).then(()=>{
        res.send("Recipe updated");
    }).catch((err)=>{
        res.send("Error updating recipe");
    })
})

app.get("/allRecipes",(req,res)=>{
    helper.allRecipes().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send("Error fetching recipes");
    })

})
app.get("/allIngredients",(req,res)=>{
    helper.allIngredients().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send("Error fetching ingredients");
    })
})
app.get("/recipe/:id",(req,res)=>{
    const id = req.params.id;
    helper.recipeById(id).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send("Error fetching recipe");
    })
})


helper.recipeDatabase().then(()=>{
    helper.ingredientsDatabase().then(()=>{
        app.listen(PORT,'0.0.0.0');
        console.log(`Server running on port ${PORT}`);
    }).catch((err)=>{
        console.log("Error initializing database");
    })
    console.log("Database initialized");
}).catch((err)=>{
    console.log("Error initializing database");
})



