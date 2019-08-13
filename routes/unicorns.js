var express = require('express');
var router = express.Router();

/* GET unicorn list. */
router.get('/', function(req, res) {
  var db = req.db;
  var collection = db.get('Unicorns');
  collection.find({},{},function(e,docs){
    var doc = docs[0];
    var unicorns = doc.entities.map(item => {
      var unicorn = item;
      delete unicorn["funding_rounds"];
      return unicorn;
    });
    res.json(unicorns);
  });
});

/* GET unicorn list. */
router.get('/:name', function(req, res) {
  var db = req.db;
  var collection = db.get('Unicorns');
  collection.find({},{},function(e,docs){

    var doc = docs[0];

    var result = doc.entities.find( element => element.name == req.params.name );

    res.json(result);
  });
});

module.exports = router;
