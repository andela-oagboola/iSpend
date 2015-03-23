var express = require("express");
var mongoose = require("mongoose");
var bodyParser     = require('body-parser');
var db = require("./config/db");
var passport = require('passport');
var routes = require("./app/route");
var app = express();

mongoose.connect(db.url);
// var dba = mongoose.connection;
// dba.on('error', console.error.bind(console, "error leleyi"));
// dba.once('open', function callback() {
//   console.log("we connected ");
// });
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

require('./config/passport')();
app.use(passport.initialize());

app.use(passport.session());

routes(app);


app.listen(8001, function() {
  console.log("server started");
});