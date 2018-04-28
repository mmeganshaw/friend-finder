var express = require('express');
var path = require('path');


const PORT = 3000;

// create express application
var app = express();

app.get("/", function(req, res) {
	res.send("home page");
});

app.get("/hello", function(req, res) {
	res.send("hello world!");
});

app.get("/api/friends" function(req, res) {
	res.send()
});

app.listen(PORT, function () {
	console.log("App listening on port: " + PORT);
}); 