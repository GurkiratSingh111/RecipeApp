const {Pool} = require("pg");
  
const pool = new Pool({
    user: "postgres",
    host: "db",
    password: "root",
})
export default pool;