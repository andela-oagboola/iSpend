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
    console.log("body ", body);
    Users.create(body, function(err, user) {
      if (err) {
        res.json(err);
      }
      user.password = undefined;
      req.login(user, function(err) {
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
    Users.findById(id, function(err, user) {
      if(err) {
        res.json(err);
      }
      res.json(user);
    });
  },

  addBudget: function(req, res) {
    var body = req.body;
    console.log("new budget", body);
    console.log("user id ", req.params);
    Users.where({_id: req.params.userId}).update({budget: body._id}).exec(function(err, user) {
      if(err) {
        console.log("err ", err);
        res.json(err);
      }
      res.json(user);
        console.log("user ", user);
    });
  },


  login: function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err || !user) {
        res.status(400).send(info);
      } else {
        user.password = undefined;
        req.login(user, function(err) {
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
    req.logout();
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
  },
  isLoggedIn: function(req, res) {
    res.json(req.user);
  }
};
