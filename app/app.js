var express = require('express');
var CodeBreaker = require('./main');
var app = express();

app.get('/setSecret/:secret', function(req,res){
  number = req.params.secret;
  CodeBreaker.setSecret(number);
  res.send({message: 'ok, let the game begin'})
});

app.get('/guess/:number', function(req, res){
  number = req.params.number;
  res.send({result: CodeBreaker.codeBreaker(number)})
});

module.exports=app;
