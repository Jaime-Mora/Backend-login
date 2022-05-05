
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'ncompany',
  password: ''
});

connection.connect();
module.exports = connection;