var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('<h1>Hello Express</h1>');
});

app.get('/me', function(req, res){
  res.send('<h1>Ray Villalobos</h1>');
});

app.get('/fluent', function(req, res){
  res.send('<h1>Fluent Conference</h1>');

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});