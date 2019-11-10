var inquirer = require("inquirer");
var mysql = require("mysql");
const keys = require("./keys.js");
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
function printMenu() {
    console.log("1. View Products for Sale");
    console.log("2. View Low Inventory");
    console.log("3. Add to Inventory");
    console.log("4. Add New Product");
    selectOption();
}

function selectOption() {
    inquirer
        .prompt([{
            name: "choice",
            type: "list",
            message: "What do you like to do?",
            choices:["1.View Products for Sale","2.View Low Inventory","3.Add to Inventory","4.Add New Product"]
        }])
        .then(executeCommand);
}

function executeCommand(answer) {

    switch (answer.choice) {

        case "1.View Products for Sale":
            printProducts();
            break;

        case "2.View Low Inventory":
            lowInventory();
            break;

        case "3.Add to Inventory":
                addInventoryQuestion();

        case "4.Add New Product":
            //function()

    }

}
function printProducts(){
    console.log("Selecting all products...\n");
    db.query("SELECT item_id, product_name,stock_quantity, price from products;", function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
          console.log(res[i]);
          console.log("+____________________________________________+");
        }

        db.end();
});
}
function lowInventory(){
    console.log("Selecting Low Inventory...\n");
    db.query(" select * from products where stock_quantity<5;", function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            console.log(res[i]);
            console.log("+____________________________________________+");
          }
          db.end();
});
}
function addInventoryQuestion() {
    inquirer
        .prompt([{
            name: "item",
            type: "number",
            message: "What is product ID?"},
            {
                name: "quantity",
                type: "number",
                message: "How many units of the product you want to add?"
          
        }])
        .then(addInventory);
}
function addInventory(answer) {
    db.query("Update products SET stock_quantity=stock_quantity+? where item_id= ?;", [answer.quantity,answer.item], function (err, res) {
      if (err) throw err;
      printProducts();
    });
}

printMenu();






