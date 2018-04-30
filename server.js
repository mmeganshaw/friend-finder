// Sets package requirements
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')

// Setting port to 5000 for heroku
var PORT = process.env.PORT || 8080;

// respond with "hello world" when a GET request is made to the homepage

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static(__dirname + '/style'));

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function(){
	console.log("Server listening on: " + PORT);
});