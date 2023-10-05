const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//inport authentication module
const auth = require('./auth.js');

auth.createUser("user", "pass");


console.log(auth.authenticateUser("user", "pass"));



//Connect to db
const mysql = require('mysql');
//Creat a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'g00425728'
});


//conection to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to db: ', err);
    } else {
        console.log('Connected to db!');
    }
});

//Server static files from the public directory
app.use(express.static("home"));
app.use(express.static("pics"));

//route to handel the login form submission
app.post("/login", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const authenticated = auth.authenticateUser(username, password);
    console.log(authenticated);

        //test for successful authentication
    if (authenticated) {
        console.log("Authentication was successful!") //direct to correct page to home
        res.render("home");
    } else { 
        console.log("Authentication was not successful!") //page user password in incorrect try again
        res.render("failed");
    }
});


app.get("/shop", function (req, res) { 
    const ID = req.query.rec;
 
    connection.query("SELECT * FROM products WHERE ID =?", [ID], function (err, rows, fields)
    {
        if (err)
        {
            console.error("Error retriving data from database:", err);
            res.status(500).send("Error retreiving data from database");
        }
        else if (rows.length === 0)
        {
            console.error("No rows found for ID $[ID]");
            res.status(404).send("No product found for ID $[ID]");
        }
        else { 
            console.log("Data retrieved from the Database!");
          
            const prodName = rows[0].Product;
            const prodModel = rows[0].Model;
            const pic = rows[0].Image;
            const price = rows[0].Price;
            res.render("item.ejs", { myMessage: prodName, model: prodModel, myImage: pic, myPrice: price});
        }
        //inject data into a HTML
     })
});

app.post("/shop", function (req, res) {
    
    const ID = req.body.rec2;
    
    // Query for the product with the particule ID
  connection.query("SELECT * FROM products WHERE id = ?", [ID], function (err, rows, fields) {
      if (err) {
         // Handle errors during data retrieval
      console.error('Error retrieving data from database: ', err);
      res.status(500).send('Error retrieving data from database');
      } else if (rows.length === 0) {
          //when no product is found for the given ID
      console.error(`No rows found for ID ${ID}`);
      res.status(404).send(`No product found for ID ${ID}`);
    } else {
      console.log('Data retrieved from database!');
      const prodName = rows[0].Product;
      const prodModel = rows[0].Model;
          const image = rows[0].Image;
          
           // Render the "item.ejs" view and pass the retrieved data as variables
        res.render("item.ejs", { myMessage: prodName, model: prodModel, myImage: image});
    }
  });
});




app.get("/home", function (req, res) { 
    res.render("home.ejs");
})

//Start the server
app.listen(3000, () => {
    console.log("Server started on port 3000");
}); 