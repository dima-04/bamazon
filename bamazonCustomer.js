var mysql = require("mysql");
const keys = require("./keys.js");
var db = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: keys.password,
  database: "bamazon"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + db.threadId + "\n");
});
function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });

}

readProducts();