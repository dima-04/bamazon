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
    console.log("1. View Products for Sale by Department");
    console.log("2. Create New Department");
    selectOption();
}
function selectOption() {
    inquirer
        .prompt([{
            name: "choice",
            type: "list",
            message: "What do you like to do?",
            choices: ["1. View Product Sales by Department", "2. Create New Department"]
        }])
        .then(getProductsByDepartment);
}
function getProductsByDepartment(answer) {
    switch (answer.choice) {

        case "1. View Product Sales by Department":
            printSalesByDepartment();
            break;

        case "2. Create New Department":
           
            break;
    }
}
function printSalesByDepartment(){
    db.query("SELECT departments.department_id,departments.department_name,departments.over_head_costs ,SUM(product_sales) AS product_sales, SUM(product_sales)-(over_head_costs) AS total_profit FROM departments INNER JOIN products ON products.department_name = departments.department_name GROUP BY departments.department_id,departments.department_name,departments.over_head_costs ;", function (err, res) {
        if (err) throw err;
        console.log(res);
        db.end();
    });
}
printMenu();