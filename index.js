// importing required packages
const express = require('express');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');


// initializing express
const app = express();

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/' , require('./routes'));
// starting the server
app.listen(port, function(){
    console.log('API is live on http://localhost:3000/products');
});