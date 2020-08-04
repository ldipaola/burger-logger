// Set up MySQL connection.
const mysql = require("mysql");
const dotenv = require("dotenv");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
