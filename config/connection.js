var mysql = require("mysql");
require('dotenv').config()

const dbpass = process.env.password
console.log(dbpass)
var connection = mysql.createConnection({
    host: "b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "nt0awbeh06ry5ejs",
    password: "e6g62kym9vlt748m",
    database: "c241uhxczjumz6gb"
});
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         passoword: dbpass,
//         database: "burgerdb"
//     })
// }

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
