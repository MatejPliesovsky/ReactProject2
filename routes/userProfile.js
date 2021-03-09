var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

var config = require('../config.js');
const url = 'mongodb://localhost:27017';

router.get('/isAuthenticated', function(req, res, next) {
  if (!req.sessionID)
    return res.end(JSON.stringify({authenticated: false}));

  let sessionID = req.sessionID;
  let session = MongoClient.connect(url, (err, client) => {
    let db = client.db('drivers');
    var cursor = db.collection('users').find({session_id: sessionID}).toArray(function(error, users) {
      let user = users[0];
      console.log('user');
      console.log(user);
      res.end(JSON.stringify({
        authenticated: user
          ? true
          : false
      }));
    });
  });
});

router.get('/loadUserData', function(req, res, next) {

 // if(!req.session.authenticated) return res.end();

  let sessionID = req.sessionID;
  console.log('sessionID');
  console.log(sessionID);
  MongoClient.connect(url, (err, client) => {
    let db = client.db('drivers');
    var cursor = db.collection('users').find({session_id: sessionID}).toArray(function(error, users) {
      let user = users[0];
      if (user) {
        console.log(`profile`);
        console.log(user);
        res.json(user);
      }
      else {
        res.json({authenticated: false})
      }
      }
    );
  });
  // res.send();
});

router.post('/update', function(req, res, next) {

  // if(!req.session.authenticated) res.end();

  // let sessionID = req.sessionID;
  // MongoClient.connect(url, (err, client) => {
  //   let db = client.db('drivers')
  //   var cursor = db.collection('users').
  //   find({session_id: sessionID}).toArray(function(error, users){
  //     let user = users[0];
  //     if(user) {
  //       console.log(`profile`);
  //       console.log(user);
  //       res.json(user);
  //     }
  //     else res.json({error: "Access denied"});
  //   });
  // });
  // res.send();
});
module.exports = router;
