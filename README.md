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

To run this application, you will need <a href="https://dev.mysql.com/doc/refman/5.6/en/installing.html">MySQL</a> and <a href="https://nodejs.org/en/download/">Node JS</a> installed on your computer.

<strong>MySQL Database Setup:</strong>

If you do not have MySQL database already set up on your machine, visit the <a href="https://dev.mysql.com/doc/refman/5.6/en/installing.html">MySQL installation page</a> to install the correct version for your operating system. Once you have MySQL installed, you will need to create the Bamazon database with the SQL code found here in <a href="https://github.com/packleader206/Bamazon/blob/master/bamazon.sql">bamazon.sql</a> file. Run this code inside your MySQL client to create the database.  If you do not already have a mySQL client, you can <a href="https://dev.mysql.com/downloads/workbench/">download MySQL Workench here</a>.

Once you have the Bamazon database set up, run the following commands at your command prompt:

           1. git clone https://github.com/packleader/Bamazon.git ENTER
           
           2. cd bamazon ENTER
           
           3. npm install ENTER
           
## Running the App

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
