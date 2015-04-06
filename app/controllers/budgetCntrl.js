var Budget = require("../models/budget");
var Items = require("../models/items");
var User = require("../models/users");
module.exports = {
  addBudget: function(req, res) {
    var body = req.body;
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
    // console.log(req.params);
    Budget.find({user: req.params.userId}).exec(function (err, budgets) {
      if (err) {
        res.json(err);
      }
      res.json(budgets);
    });
  },

  deleteBudget: function(req, res) {
    // var body = req.params.;
    // Items.remove({budget_id: body._id}, function(err, item) {
    //   if(err) {
    //     res.json(err);
    //   }
    //   else {
    //   res.json(item);
    //   }
    // });
    Budget.remove({_id: req.params.budgetId}, function(err, budget) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(budget);
      }
    });
  }
};