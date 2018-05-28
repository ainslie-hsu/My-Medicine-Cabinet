
var express = require('express');
var bodyParser = require('body-parser');
var drugs = require('../database-mongo');
// var morgan = require('morgan');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(morgan('common'));

app.get('/cabinet', function(req, res) {
  drugs.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/cabinet', function(req, res) {
  drugs.save(req.body);
  res.end(); // end the response
});

app.delete('/cabinet', function(req, res) {
  drugs.remove(req.body.id);
  res.end();
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
