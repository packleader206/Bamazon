// Bamazon - UW Coding Bootcamp Week 12 Homework Assigment - CLI Storefront with SQL backend

// NPM packages
var mysql = require("mysql");
 
var inquirer = require("inquirer"); 

var FS = require("fs");

// mySQL connection parameters
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: 'root',

    password: 'aftermath@71!',
    database: 'bamazon'
});

// Connect to SQL database
connection.connect(function (err) {
    if (err) {
        throw err;
    }
	// console.log("connected!");
	
	// Display inventory in table format
    connection.query("SELECT * FROM products;", function(err, res) {
        if(err) {
            throw err;
        }
		console.table(res);

		//Use Inquirer NPM to ask user to choose product and quantity
		inquirer.prompt([
			{
				type: 'input',
				name: 'item_id',
				message: 'From the list of products above, please enter the "item_id" of the product you would like to purchase: \n',
			},
			{
				type: 'input',
				name: 'quantity',
				message: 'How many would you like to purchase?: \n',
			}
		]).then(function(input) {
			// Display user chosen product and quantity
			 console.log('You selected: \n    item_id = '  + input.item_id + '\n    quantity = ' + input.quantity);
	
			var item = input.item_id;
			var quantity = input.quantity;
	
			// Query db to confirm that the chosen item ID exists and in the desired quantity
			var queryStr = 'SELECT * FROM products WHERE ?';
	
			connection.query(queryStr, {item_id: item}, function(err, data) {
				if (err) throw err;
	
				// If user selects an invalid item ID, data array will be empty
				// console.log('data = ' + JSON.stringify(data));
				
				// If array is empty, item does not exist, then log error and end server connection
				if (data.length === 0) {
					console.log('ERROR: You selected an invalid item_id');
					connection.end()
	
				} else {
					var productData = data[0];
	
					// console.log('productData = ' + JSON.stringify(productData));
					// console.log('productData.stock_quantity = ' + productData.stock_quantity);
	
					// Verify user selected item and quantity are in stock
					if (quantity <= productData.stock_quantity) {
						console.log('The selected item & quantity is in stock and your order has been placed!');
	
						// variable to update inventory
						var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
						// console.log('updateQueryStr = ' + updateQueryStr);
	
						// Update the inventory
						connection.query(updateQueryStr, function(err, data) {
							if (err) throw err;
							
							// Display order total and thank you msg to user
							console.log('Your total is $' + productData.price * quantity);
							console.log('Thank you for your patronage, please shop with us again.');
							console.log("\n---------------------------------------------------------------------\n");
	
							// End the database connection
							connection.end();
						})
					// If stock supply is less than user requested quantity, notify user and end database connection
					} else {
						console.log('Sorry, we do not have enough inventory of the item you requested to fulfill your request.');
						console.log('Please modify your order and try again.');
						console.log("\n---------------------------------------------------------------------\n");
						connection.end();
						
					}
				}
			})
		})
	
    })
});







