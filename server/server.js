var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo');
var {user} = require('./model/user');

var app = express();
var port = process.env.port || 3000;

app.use( bodyParser.json() );

app.post( '/todos' , (req,res) => {
  var todo = new Todo({
    text : req.body.text
  });

  todo.save().then( (doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send(error);
  });

});

app.listen( port , () => {
  console.log(`Server up at ${port}`);
});

module.exports = {app};
