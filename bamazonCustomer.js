var mysql = require("mysql");
const keys = require("./keys.js");
var inquirer = require("inquirer");

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

db.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + db.threadId + "\n");
});

function buyProduct() {
  inquirer
    .prompt([{
      name: "product",
      type: "number",
      message: "what is the Id of the products you would like to order?"
    }, {
      name: "quantity",
      type: "input",
      message: "How many units of the product you would like to buy?"

    }])
    .then(getProductAndUpdateQuantity);
}

function getProductAndUpdateQuantity(answer) {
  db.query(" select * from products where item_id=?;", [answer.product], function (err, res) {
    if (err) throw err;
  
    let price=res[0].price;

    if (res[0].stock_quantity < answer.quantity) {
      console.log("Insufficient quantity!");
      db.end();
    } else {
      db.query("update products set stock_quantity = stock_quantity - ?,product_sales=?*price where item_id = ?", [
        answer.quantity,
        answer.quantity,
        answer.product
      ], function (err, res) {
        if (err) throw err;
        console.log("Total Cost Of The Purchase: " +price*answer.quantity);

        db.end();
      });  
    }
  });
}

function readProducts() {
  console.log("Selecting all products...\n");
  db.query("SELECT item_id, product_name, price from products;", function (err, res) {
    if (err) throw err;
    for (let i = 0; i < res.length; i++) {
      console.log(res[i]);
      console.log("+____________________________________________+");
    }
    buyProduct();
  });

}

readProducts();