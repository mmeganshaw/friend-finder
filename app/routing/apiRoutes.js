var express = require('express');
var path = require('path');
var friends = require('../data/friends');

var app = express();

var totalDifference = 0;

module.exports = function(app){
  //survey page
  app.get('/api/friends', function (req, res) {
    res.json(friends);
    });

  app.post('/api/friends', function(req, res){
    res.render(req.body)
    });

};






    

