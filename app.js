var express = require('express');
var CodeBreaker = require('./main');
var app = express();

app.set('port', (process.env.PORT || 3001));

app.get('/setSecret/:secret', function(req,res){
  number = req.params.secret;
  CodeBreaker.setSecret(number);
  res.send({message: 'ok, let the game begin'})
});

app.get('/guess/:number', function(req, res){
  number = req.params.number;
  res.send({result: CodeBreaker.codeBreaker(number)})
});

app.listen(app.get('port'), function (){
  console.log('NodeJs app listening on port', app.listen)
});

module.exports=app;
