var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

var config = require('../config.js');
const url = 'mongodb://localhost:27017';

router.post('/', function(req, res) {
  var session_id = req.sessionID;
  var login = req.body.login.trim();
  var password = req.body.password.trim();
  MongoClient.connect(url, (err, client) => {
    let db = client.db('drivers')
    var cursor = db.collection('users').find({login, password}).toArray(function(error, users) {
      let user = users[0];
      if (user) {
        db.collection('users').update({
          login: user.login,
          password: user.password
        }, {$set: {
            session_id
          }});
        res.send(user);
      } else {
        req.session.authenticated = false;
        res.json({error: "Skúste znova..."})
      }
    });
  });
});

module.exports = router;
