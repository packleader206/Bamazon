DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

# CREATE TABLE products (
	# item_id INTEGER(10)NOT NULL AUTO_INCREMENT,
 	# product_name VARCHAR(100)NOT NULL,
	# department_name VARCHAR(100),
	# price INTEGER(10)NOT NULL,
    # stock_quantity INTEGER(10),
	# PRIMARY KEY (item_id)
    #);
    

INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES
    ("Baseball Glove", "Sporting Goods", "65", "100"),
    ("Tennis Racket", "Sporting Goods", "185", "100"),
    ("Football Helmet", "Sporting Goods", "150", "100"),
    ("Toothpaste", "Health & Beauty", "3", "100"),
    ("Deodorant", "Health & Beauty", "4", "100"),
    ("Shampoo", "Health & Beauty", "8", "100"),
    ("Mouthwash", "Health & Beauty", "5", "100"),
    ("Motor Oil", "Automotive", "6", "100"),
    ("Oil Filter", "Automotive", "7", "100"),
    ("Air Filter", "Automotive", "20", "100");

