"use strict";
var mongoose = require("mongoose");
var Users = require("../models/users");
var passport = require('passport');

module.exports = {
  getUsers: function(req, res) {
    Users.find({}, function(err, user) {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  },

  addUser: function(req, res) {
    var body = req.body;
    Users.create(body, function(err, user) {
      // console.log("4", user);
      // console.log("5", req.body);
      if (err) {
        res.json(err);
      }
      user.password = undefined;

      req.login(user, function(err) {
        // console.log("3", err);
        if (err) {
          res.status(400).send(err);
        } else {
          res.json(user);
        }
      });
    });
  },

  getSingleUser: function(req, res) {
   // var id = mongoose.Types.ObjectId.fromString( req.params.userId );
    var id = req.params.userId ;
    Users.findOne({ _id: id } ).exec( function(err, user) {
      if(err) {
        res.json(err);
      }
      res.json(user);
    });
  },

  login: function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      // console.log(7, info);
      if (err || !user) {
        res.status(400).send(info);
      } else {
        user.password = undefined;
        // console.log(8, user);
        req.login(user, function(err) {
          // console.log(0, req.user);
          //   console.log(6, user);
          //  console.log(5, err);
          if (err) {
            res.status(400).send(err);
          } else {
            res.json(user);
          }
        });
      }
    })(req, res, next);
  },

  logout: function(req, res) {
    // console.log(40, req.user);
    req.logout();
    // console.log(30, req.user);
    res.json({
      message: 'User logged out successfully'
    });
  },

  authenticate: function(req, res, next) {
    // console.log(9, req);
    // console.log(req.user);
    if (!req.isAuthenticated()) {
      res.json({
        message: 'User is not logged in'
      });
      return;
    }
    next();
  }
};
