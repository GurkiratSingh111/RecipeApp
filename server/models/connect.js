const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgresql://postgres:root@postgres-db:5432/recipe_db"
});

module.exports = pool;
