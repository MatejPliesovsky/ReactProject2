var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var config = require('../config.js');
const url = 'mongodb://localhost:27017';

router.get('/', function(req, res) {
  MongoClient.connect(url, (err, client) => {
    let db = client.db('drivers')
    var cursor = db.collection('users').find().toArray(function(error, drivers) {
      res.json(drivers);
    });
  });
});
module.exports = router;
