-- Drops the bamazon if it exists currently --
DROP DATABASE IF EXISTS bamazon;

-- Creates the "bamazon" database --
CREATE DATABASE bamazon;

-- Makes it so all of the following code will affect bamazon --
USE bamazon;

-- Creates the taproductsble "products" within bamazon --
CREATE TABLE products (
  item_id INTEGER(11) auto_increment not null,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price INTEGER(11) not null,
  stock_quantity INTEGER(10) NOT NULL,
  primary key(item_id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Dippers","Baby",50,10);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Wipes","Baby",20,100);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Baby Shampoo","Baby",15,15);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Lotion","Baby",18,5);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Baby-Food","Babys",2,50);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Rash Cream","Baby",6,30);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Tooth Paste","Beauty",3,22);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Orange","Fruit",2,200);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Bread","Bakery",5,10);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Eggs","Fridge",7,100);


create TABLE departments(
department_id INTEGER(11) auto_increment not null,
department_name VARCHAR(30) NOT NULL,
over_head_costs INTEGER(11) not null,
  primary key(department_id)
  );

ALTER TABLE products
ADD COLUMN product_sales VARCHAR(15) AFTER stock_quantity;
Update products SET product_sales=0;



