// Get the named datastore
var rdi = sails.getDatastore('default');

// Grab the MySQL module from the datastore instance
var mysql = rdi.driver.mysql;

// Create a new connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12345678',
  database: 'myapp',
  port: 3306
});


connection.query('SELECT * FROM user');