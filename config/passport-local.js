'use strict';

var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var User = require('./../app/models/users');

module.exports = function() {
  passport.use(new localStrategy(function(username, password, done) {
    User.findOne({
      username: username
    }, function(err, user) {
      if (err) {
        console.log(1, err);
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: 'incorrect username'
        });
      }
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect password'
        });
      }
      console.log(1, user);
      return done(null, user);
    });
  }));
};
