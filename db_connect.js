var MongoClient = require('mongodb').MongoClient;
var database = undefined;
var dbUrl = 'mongodb://127.0.0.1:27017/appusers';
MongoClient.connect(dbUrl, function(err, db) {
  if (err) {
    throw err;
  } else {
    database = db;
    console.log('MongoDB connection successful');
    var testUser = {
     first_name: 'Roman',
     last_name:'Tutko'
   };
   var appUsers = db.collection('appUsers');
   appUsers.insert(testUser, function(err, docs) {
     if (err) {
       throw err;
     } else {
       console.log(docs);
     }
   });
 }
});
