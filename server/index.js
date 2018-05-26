
var express = require('express');
var bodyParser = require('body-parser');
var drugs = require('../database-mongo');
var morgan = require('morgan');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("common"));

app.get('/cabinet', function (req, res) {
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.post('/cabinet', function (req, res) {
  var drug = req.body;
  // drugs.save()
  // res.json(req);
    console.log(drug.name, drug.exp);
    res.end('testing'); // end the response
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

// morgan logs activity