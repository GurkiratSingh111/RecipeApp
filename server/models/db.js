const pool = require("./connect.js");

function getCurrentTime(){
    date = new Date();
    console.log("The date is here", date);
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return `${date.getFullYear()}, ${date.getDate()}th ${month[date.getMonth()]}, ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
}

async function addRec(name, instructions, ingredients){
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
}

async function deleteRec(id){
    const q = "DELETE FROM recipes WHERE id = $1";
    await pool.query(q,[id]);
}

async function updateRec(id, name, ingredients, instructions){
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
}

async function allRec(){
    const q =  `SELECT r.name, r.id
                FROM recipes as r`;
        const result = await pool.query(q);
        return result.rows;
}

async function allIngred(){
    const q = "SELECT * FROM ingredients";
    const result = await pool.query(q);
    return result.rows;
}

async function recipe(id){
    const q1 = `SELECT *
               FROM recipes as r
               WHERE r.id = $1`;
   let result1 = await pool.query(q1,[id]);
   result1 =result1.rows[0];

   const q2 = `SELECT i.name
               FROM ingredients as i
               WHERE i.recipeId = $1`;
   let result2 = await pool.query(q2,[id]);
   result2 = result2.rows;
   return {result1, result2};
}
module.exports = {addRec, deleteRec, updateRec, allRec, allIngred, recipe};