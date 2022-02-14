const mysql = require('mysql');
require('dotenv').config() 

var connection = mysql.createConnection({
    host: process.env.DBLink,
    user: 'admin',
    password: process.env.DBpassword,
    port: "3306"
})

connection.connect(function (err) {
    console.log( process.env.DBLink);
    if (!err) {
        console.log("Database is connected ... ");
    } else {
        console.log("Error connecting database ... ",err);
    }
});