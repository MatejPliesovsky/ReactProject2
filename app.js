var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
require("babel-core/register");
require("babel-polyfill");

var bodyParser = require('body-parser')

var login = require('./routes/login');
var logout = require('./routes/logout');
var register = require('./routes/register');
var update = require('./routes/update');
var insert = require('./routes/insert');
var insertcar = require('./routes/insertcar');
var users = require('./routes/users');
var userProfile = require('./routes/userProfile');
var drivers = require('./routes/drivers');
//
// function isAuthenticated(){
//    MongoClient.connect(url, (err, client) => {
//      console.log(login, password)
//      let db = client.db('drivers')
//      var cursor = db.collection('users').find({login, password}).toArray(function(error, users){
//        let user = users[0];
//
//        if(user) {
//          db.collection('users').update({login: user.login, password: user.password}, {login: user.login, password: user.password, session_id});
//          console.log(`user ${user.login} logged id`);
//          console.log(user);
//          req.session.authenticated= true;
//          res.json({authenticated: true});
//        }
//        else {
//          req.session.authenticated= false;
//          res.json({error: "Invalid username or password"});
//        }
//     return true;
// }
app.use(express.static(__dirname + '/src'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {
    path: '/',
    httpOnly: false,
    secure: false,
    maxAge: null
  }
}));









app.all("*", function(req, res, next) {
  console.log(req.sessionID);
  next();
  // res.
  // res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});
app.use('/users', users);
app.use('/login', login);
app.use('/register',register);
app.use('/update',update);
app.use('/insert',insert);
app.use('/insertcar',insertcar);
app.use('/logout', logout);
app.use('/drivers', drivers);
app.use('/userProfile', userProfile);
// app.use('/isAuthenticated', userProfile.get('/isAuthenticated'));
// app.use('/isAuthenticated', function(req, res) {
//   console.log("Auth");
//   userProfile.get('/isAuthenticated');
// });

app.use('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

http.createServer(app).listen(3000);

module.exports = app;
