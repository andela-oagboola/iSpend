"use strict";
var passport = require('passport');
var User = require('./../app/models/users');

module.exports = function() {
  passport.serializeUser(function(user, done) {
    console.log("user ",user);
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log("id", user);
      done(err, user);
    });
  });

  require('./passport-local.js')();
};