var express = require("express");
var mongoose = require("mongoose");
var bodyParser     = require('body-parser');
var db = require("./config/db.js");
var routes = require("./app/route.js");
var app = express();

mongoose.connect(db.url);
// var dba = mongoose.connection;
// dba.on('error', console.error.bind(console, "error leleyi"));
// dba.once('open', function callback() {
//   console.log("we connected");
// });
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

routes(app);

console.log("server started");
app.listen(8001);