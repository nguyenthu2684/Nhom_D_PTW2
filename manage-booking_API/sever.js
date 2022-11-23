var express = require('express');
var bodyparser = require('body-parser');
  
var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
  
var server = app.listen(5000, function() {
  console.log('Server listening on port ' + server.address().port);
});
module.exports = app;
