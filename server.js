var express = require("express");
var mongoose = require("mongoose");
var bodyParser     = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var db = require("./config/db");
var passport = require('passport');
var routes = require("./app/route");
var app = express();

var env = process.env.NODE_ENV || 'development';

var port = process.env.PORT || 8001;
if(env === 'development') {
  mongoose.connect(db.developmentUrl);
}
else if( env === 'production' ) {
  mongoose.connect(db.productionUrl);
}

// var dba = mongoose.connection;
// dba.on('error', console.error.bind(console, "error leleyi"));
// dba.once('open', function callback() {
//   console.log("we connected ");
// });
app.use(cookieParser());

app.use(logger('dev'));

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use(session({
  secret:'ispend',
  resave: true,
  saveUninitialized: true
}));


app.use(passport.initialize());

app.use(passport.session());

require('./config/passport')();

routes(app);


app.listen(port, function() {
  console.log("server started");
});