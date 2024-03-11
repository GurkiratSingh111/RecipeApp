const pool = require("./connect.js");

async function ingredientDatabase() {
    const q = `CREATE TABLE IF NOT EXISTS ingredients(
        iid SERIAL PRIMARY KEY, 
        recipeId INT, name VARCHAR(50), 
        FOREIGN KEY(recipeId) REFERENCES recipes(id)
        ON DELETE CASCADE)`
    await pool.query(q);
}

module.exports = ingredientDatabase;