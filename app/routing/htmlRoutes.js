var express = require('express');
var path = require('path');

var app = express();

module.exports = function(app){
  //survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  //route to the home page
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
  
  
};