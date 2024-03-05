const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const {Pool} = require("pg");
  
const pool = new Pool({
    user: "postgres",
    host: "db",
    password: "root",
})
const PORT = 8080;


const helper = {
    init: async function() {
        const q = "CREATE TABLE IF NOT EXISTS recipes(id SERIAL PRIMARY KEY, name VARCHAR(50), ingredients TEXT, directions TEXT)"
        await pool.query(q)
    },
    add: async function(name, ingredients, directions){
        const q = "INSERT INTO recipes(name, ingredients, directions) VALUES($1,$2,$3)";
        await pool.query(q,[name,ingredients,directions]);
    },
    delete: async function(id){
        const q = "DELETE FROM recipes WHERE id = $1";
        await pool.query(q,[id]);
    },
    update: async function(id,name, ingredients, directions){
        const q = "UPDATE recipes SET name = $1, ingredients = $2, directions = $3 WHERE id = $4";
        await pool.query(q,[name,ingredients,directions,id]);
    },
    allRecipes: async function(){
        const q = "SELECT * FROM recipes";
        const result = await pool.query(q);
        return result.rows;
    },
    recipe: async function(id){
        const q = "SELECT * FROM recipes WHERE id = $1";
        const result = await pool.query(q,[id]);
        return result.rows[0];
    },
}
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/add", (req,res)=>{
    const {name, ingredients, directions} = req.body;
    helper.add(name, ingredients, directions).then(()=>{
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
    const {name, ingredients, directions} = req.body;
    helper.update(id,name, ingredients, directions).then(()=>{
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
app.get("/recipe/:id",(req,res)=>{
    const id = req.params.id;
    helper.recipe(id).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send("Error fetching recipe");
    })
})


helper.init().then(()=>{
    console.log("Database initialized");
}).catch((err)=>{
    console.log("Error initializing database");
})
app.listen(PORT,'0.0.0.0');
console.log(`Server running on port ${PORT}`);


