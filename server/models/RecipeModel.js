const pool = require("./connect.js");

async function recipeDatabase() {
    const q = `CREATE TABLE IF NOT EXISTS recipes(
        id SERIAL PRIMARY KEY, 
        name VARCHAR(100),
        instructions TEXT, 
        timeLastModified VARCHAR(300)
        )`;
    await pool.query(q)
}

module.exports = recipeDatabase;