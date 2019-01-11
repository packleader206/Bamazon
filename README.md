# Bamazon!

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

## Instructions:

To use, simply type <strong>"node bamazonCustomer.js"</strong> & hit <strong>ENTER</strong>. A table will appear displaying currently available product inventory & pricing. The user is then prompted to select: 
 
            1. The item id of the product they would like to purchase
            
            2. The quantity of the product they would like to purchase
            
 #### Example:
 Below, you can see that the user is presented with the inventory of the store's products.  If the selected item and quantity are available, the user's order is fulfilled and they are given the total cost of their order.
 
 <img src="https://packleader206.github.io/bamazon/images/successful_order.jpg" alt="sucessful_order Screenshot">
 
 #### Example:
 As you can see from the screenshot below, the inventory saved in the SQL database is dynamically changed when a customer order has been successfully placed. Notice that the stock_quantity for 'Deordorant' (item id 5) has decreased in stock from 95 to 89, because 6 units were purchased on the previous order.
 
 <img src="https://packleader206.github.io/bamazon/images/updated_inventory.png" alt="updated_inventory Screenshot">
 
 #### Example:
 The app will notify the user if he/she requests to purchase a quantity of an item that the current inventory cannot fulfill. 
 
 <img src="https://packleader206.github.io/bamazon/images/insufficient_quantity.png" alt="insufficient_quantity Screenshot">
 
 #### Example:
 The app will notify the user if he/she requests to purchase an item that does not exist (item_id).
 
 <img src="https://packleader206.github.io/bamazon/images/invalid_item_id.png" alt="invalid_item_id Screenshot1">
