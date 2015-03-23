var Budget = require("../models/budget");
var Items = require("../models/items");
var User = require("../models/users");
module.exports = {
  addCategory: function(req, res) {
    var body = req.body;
    console.log(body);
    Budget.create(body, function(err, budgets) {
      if (err) {
        res.json(err);
      }
      res.json(budgets);
    });
  },

  getCategories: function(req, res) {
    Budget.find({}, function(err, budgets) {
      if(err) {
        res.json(err);
      }
      res.json(budgets);
    });
  },

  getEachCategory: function(req, res) {
    Budget.findById(req.params.categoryId, function(err, budgets) {
      if(err) {
        res.json(err);
      }
      res.json(budgets);
    });
  },

  getUserCategories: function (req, res) {
    console.log("jgfhjsgvhkgahjv");
    console.log(req.params);
    Budget.find({_id: req.params.userId}).populate("user, _id").exec(function (err, budgets) {
      if (err) {
        console.log("error");
        res.json(err);
      }
      console.log("result");
      res.json(budgets);
    });
  },

  deleteCategory: function(req, res) {
    var body = req.params.body;
    Items.remove({category_id: body._id}, function(err, item) {
      if(err) {
        res.json(err);
      }
      else {
      res.json(item);
      }
    });
    Budget.remove({_id: body._id}, function(err, budget) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(budget);
      }
    });
  }
};