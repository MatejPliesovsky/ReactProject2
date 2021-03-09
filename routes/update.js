var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var cookieParser = require("cookie-parser");
var session = require("express-session");

var config = require("../config.js");
const url = "mongodb://localhost:27017";

router.post("/", function(req, res) {
  var session_id = req.sessionID;
  var role = "user";
  var role2 = "driver";
  const {
    login,
    firstname,
    lastname,
    dob,
    street,
    city,
    zip,
    state,
    phone,
    email,
    team,
    drivinglicence,
    password,
    password1
  } = req.body;
  MongoClient.connect(url, (err, client) => {
    let db = client.db('drivers');
    var cursor = db.collection('users').find({password}).toArray(function(error, users) {
      let user = users[0];
      if (user) {
        res.json({error: "Zhodne Heslo..."})
      } else if (db.collection('users').update({
        login
      }, {
        session_id,
        role,
        role2,
        login,
        firstname,
        lastname,
        dob,
        street,
        city,
        zip,
        state,
        phone,
        email,
        team,
        drivinglicence,
        password,
        password1
      }))
        res.json({registered: true});
      }
    );
  });
});

module.exports = router;
