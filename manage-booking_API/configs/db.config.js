const mysql = require('mysql');
const dotenv =require('dotenv');

dotenv.config();

const dbConnection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});

module.exports = dbConnection;