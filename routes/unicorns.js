var express = require('express');
var router = express.Router();



/* GET unicorn list. */
router.get('/', function(req, res) {
  var db = req.db;
  var collection = db.get('Unicorns');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

module.exports = router;
