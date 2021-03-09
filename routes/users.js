var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var cookieParser = require('cookie-parser');
var session = require('express-session');

var config = require('../config.js');
const url = 'mongodb://localhost:27017';

//
// var app = express();
//
// app.use(cookieParser());
// app.use();

router.get('/:id', function(req, res) {
  console.log('req.cookies.secret');

  console.log(req.cookies.secret);
  res.cookie({secret: "Shh, its a secret!"});
  MongoClient.connect(url, (err, client) => {
    db = client.db('drivers')
    var cursor = db.collection('Drivers').find().toArray(function(error, drivers) {
      console.log('driver');
      console.log(drivers);
    });
    console.log('cursor');
    console.log(cursor);
  })
});

// router.get('/', function(req, res) {
//   db.appusers.find(function(err, appusers){
//         if(err){
//             res.send(err);
//         }
//         res.json(appusers);
//     });
// });
/*
router.post('/new', function(req, res, next){
    var newusers = req.body;
    if(!newusers.title || !(newusers.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.newusers.save(newusers, function(err, newusers){
            if(err){
                res.send(err);
            }
            res.json(newusers);
        });
    }
});

router.delete('/newusers/:id', function(req, res, next){
    db.appusers.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, newusers){
        if(err){
            res.send(err);
        }
        res.json(newusers);
    });
});

router.put('/newusers/:id', function(req, res, next){
    var newusers = req.body;
    var updnewusers = {};

    if(newusers.isDone){
        updnewusers.isDone = newusers.isDone;
    }

    if(newusers.title){
        updnewusers.title = newusers.title;
    }

    if(!updnewusers){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.appusers.update({_id: mongojs.ObjectId(req.params.id)},updnewusers, {}, function(err, newusers){
            if(err){
                res.send(err);
            }
            res.json(newusers);
        });
    }
});

  console.log(req.body);
  // GET/users/ route
  res.send({name:config.admin.name});
});
*/
module.exports = router;
