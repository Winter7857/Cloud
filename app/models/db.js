const mysql = require("mysql2");
require('dotenv').config();
const dbConfig = require("../config/db.config");
const connection = mysql.createConnection({
  host: process.env.Host,
  user: process.env.User,
  password: process.env.Password,
  database: process.env.Database,
  port: process.env.Port2,
  ssl: {
    minVersion: process.env.minVersion,
    rejectUnauthorized: process.env.rejectUnauthorized,
    
  }
});

connection.connect((error)=>{
  if(error) console.log("MYSQL connection: " + error);
  else console.log("Successfully connected to the database");

});
module.exports = connection;