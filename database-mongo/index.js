var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var drugSchema = mongoose.Schema({
  name: String,
  exp: Date
});

var Drug = mongoose.model('Drug', drugSchema);

var save = function(info) {
  var newDrug = new Drug(info);
  newDrug.save(function(err, savedDrug) {
    console.log(err, savedDrug);
  })
};

var selectAll = function(callback) {
  Drug.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.save = save;