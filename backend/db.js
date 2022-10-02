const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'yakwon',
    database: 'myapp'
});
exports.pool = pool;
