var mysql = require("mysql");
require('dotenv').config()

const dbpass = process.env.password
console.log(dbpass)
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: dbpass,
    database: "burgerDB"
});
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        passoword: dbpass,
        database: "burgerdb"
    })
}

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
