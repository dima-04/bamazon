-- Drops the bamazon if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the "bamazon" database --
CREATE DATABASE bamazon;

-- Makes it so all of the following code will affect bamazon --
USE bamazon;

-- Creates the table "products" within bamazon --
CREATE TABLE products (
item_id INTEGER(11) auto_increment not null,
  -- Makes a string column called "name" which cannot contain null --
 product_name VARCHAR(30) NOT NULL,
 department_name VARCHAR(30) NOT NULL,
 price INTEGER(11) not null,
 stock_quantity INTEGER(10) NOT NULL,
   primary key(item_id)
);
