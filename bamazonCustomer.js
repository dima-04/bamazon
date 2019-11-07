var mysql = require("mysql");
const keys = require("./keys.js");

console.log(keys.password);
console.log(keys);
var db = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: keys.mysql.password,
  database: "bamazon"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + db.threadId + "\n");
});
function readProducts() {
    console.log("Selecting all products...\n");
    db.query("SELECT item_id, product_name, price from products;", function(err, res) {
      if (err) throw err;
      for (let i=0;i<res.length;i++){
        console.log(res[i]);
        console.log("+____________________________________________+");
      }
      // Log all results of the SELECT statement
      
      db.end();
    });

}

readProducts();