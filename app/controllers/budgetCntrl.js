var Budget = require("../models/budget");
var Items = require("../models/items");
var User = require("../models/users");
module.exports = {
  addBudget: function(req, res) {
    var body = req.body;
    console.log("new cat ", body);
    Budget.create(body, function(err, budgets) {
      if (err) {
        res.json(err);
      }
      res.json(budgets);
    });
  },

  getBudgets: function(req, res) {
    Budget.find({}, function(err, budgets) {
      if(err) {
        res.json(err);
      }
      res.json(budgets);
    });
  },

  getEachBudget: function(req, res) {
    Budget.findById(req.params.budgetId, function(err, budgets) {
      if(err) {
        res.json(err);
      }
      res.json(budgets);
    });
  },

  getUserBudget: function (req, res) {
    console.log("jgfhjsgvhkgahjv");
    console.log(req.params);
    Budget.find({user: req.user._id}).exec(function (err, budgets) {
      if (err) {
        console.log("error");
        res.json(err);
      }
      console.log("result");
      res.json(budgets);
    });
  },

  deleteBudget: function(req, res) {
    var body = req.params.body;
    Items.remove({budget_id: body._id}, function(err, item) {
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