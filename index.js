// Require needed node modules
var bodyParser = require('body-parser');
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');

// Global variables
var app = express();
var db = require('./models');

// Set and use statements
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

// Define routes
app.get('/', function(req, res) {
	res.send('stub for home page');
});


// Listen on port 3000
app.listen(3000);