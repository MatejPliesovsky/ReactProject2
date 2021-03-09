var express = require('express');
var router = express.Router();
var sessionID = require('express-session');
const MongoClient = require('mongodb').MongoClient;

var config = require('../config.js');
const url = 'mongodb://localhost:27017';

router.post('/', function(req, res) {
  var session_id = req.sessionID;
  MongoClient.connect(url, (err, client) => {
    let db = client.db('drivers')
    var cursor = db.collection('users').find({session_id}).toArray(function(error, users) {
      db.collection('users').update({
        session_id
      }, {
        $set: {
          session_id: null
        }
      });
    });
  });
  res.send();
});

module.exports = router;
