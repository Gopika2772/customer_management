const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    database: "customers",
    user: "root",
    password: "Gopika01#",
});
module.exports = db