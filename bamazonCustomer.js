var mysql = require("mysql");
const keys = require("./keys.js");
var inquirer = require("inquirer");

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
  start();
  console.log("connected as id " + db.threadId + "\n");
});

function start() {
    inquirer
      .prompt({
        name: "product",
        type: "number",
        message: "what is the Id of the products you would like to order?"
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.product === true) {
         readProducts();
        }
        else if(answer.product=== false) {
          connection.end();
        }
      });
      inquirer
      .prompt({
        name: "item",
        type: "input",
        message: "How many units of the product you would like to buy?"
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.product === true) {
         readProducts();
        }
        else if(answer.product=== false) {
          connection.end();
        }
      });
  }
  

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