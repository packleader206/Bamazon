// Bamazon - A CLI Storefront with SQL backend
// UW Coding Bootcamp Week 12 Homework Assigment

// Required NPM packages
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

// connect to SQL database and display table/inventory
connection.connect(function (err) {
    if (err) {
        throw err;
    }
    // console.log("connected!");

    connection.query("SELECT * FROM products;", function(err, res) {
        if(err) {
            throw err;
        }
        console.table(res);
    })
});



	// Use inquirer NPM to prompt user to select product and quantity
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'From the list of products below, please enter the "item_id" of the product you would like to purchase: \n',
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many would you like to purchase?: \n',
		}
	]).then(function(input) {
		 console.log('You selected: \n    item_id = '  + input.item_id + '\n    quantity = ' + input.quantity);

		var item = input.item_id;
		var quantity = input.quantity;

		// Query db to confirm that the chosen item ID exists and in the desired quantity
		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;

			// If user selects an invalid item ID, data array will be empty
			// console.log('data = ' + JSON.stringify(data));

			if (data.length === 0) {
				console.log('ERROR: You selected an invalid item_id');

			} else {
				var productData = data[0];

				// console.log('productData = ' + JSON.stringify(productData));
				// console.log('productData.stock_quantity = ' + productData.stock_quantity);

				// Verify user selected item and quantity are in stock
				if (quantity <= productData.stock_quantity) {
					console.log('The selected item & quantity is in stock!');

					// variable to update inventory
					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
					// console.log('updateQueryStr = ' + updateQueryStr);

					// Update the inventory
					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Your order has been placed! Your total is $' + productData.price * quantity);
						console.log('Thank you for shopping with us!');
						console.log("\n---------------------------------------------------------------------\n");

						// End the database connection
						connection.end();
                    })
                // If stock supply is less than user requested quantity, notify user and end database connection
				} else {
					console.log('Sorry, we do not have enough inventory of the item quantity you requested.');
					console.log('Please modify your order.');
					console.log("\n---------------------------------------------------------------------\n");
                    connection.end();
					
				}
			}
		})
	})






