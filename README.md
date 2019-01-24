# Bamazon

## Overview:

Bamazon is a Node CLI Storefront with a mySQL backend whereby users can select and purchase products from inventory. The app will take user input and determine if requested quantity is available to fulfill the order.  If an order is placed successfully, the app will dynamically update the inventory in the SQL database.

## Technologies Used:
- Javascript
- SQL Server
- NPM mySQL
- NPM Inquirer

## Author:

<strong>Al Young</strong>
<hr>

## Setup:

To run this application, you will need MySQL and Node JS installed on your computer.

<strong>MySQL Database Setup</strong>
If you do not have MySQL database already set up on your machine, visit the <a href="https://dev.mysql.com/doc/refman/5.6/en/installing.html>MySQL installation page</a> to install the version you need for your operating system. Once you have MySQL installed, you will be able to create the Bamazon database and the products table with the SQL code found in bamazon.sql. Run this code inside your MySQL client (like Sequel Pro or MySQL Workbench) to populate the database, then you will be ready to proceed with running the Bamazon customer and manager interfaces.

To use, simply type <strong>"node bamazonCustomer.js"</strong> & hit <strong>ENTER</strong>. A table will appear displaying currently available product inventory & pricing. The user is then prompted to select: 
 
            1. The item id of the product they would like to purchase
            
            2. The quantity of the product they would like to purchase
            
 #### Below, you can see that the user is presented with the inventory of the store's products.  If the selected item and quantity are available, the user's order is fulfilled and they are given the total cost of their order.
 
 <img src="https://packleader206.github.io/Bamazon/images/successful_order.png" alt="successful_order Screenshot">
 
 #### As you can see from the screenshot below, the inventory saved in the SQL database is dynamically changed when a customer order has been successfully placed. Notice that the stock_quantity for 'Deordorant' (item id 5) has decreased in stock from 95 to 89, because 6 units were purchased on the previous order.
 
 <img src="https://packleader206.github.io/Bamazon/images/updated_inventory.png" alt="updated_inventory Screenshot">
 
 #### The app will notify the user if he/she requests to purchase a quantity of an item that the current inventory cannot fulfill. 
 
 <img src="https://packleader206.github.io/Bamazon/images/insufficient_quantity.png" alt="insufficient_quantity Screenshot">
 
 #### The app will notify the user if he/she requests to purchase an item that does not exist (item_id).
 
 <img src="https://packleader206.github.io/Bamazon/images/invalid_item_id.png" alt="invalid_item_id Screenshot1">
