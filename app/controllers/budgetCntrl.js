var Budget = require("../models/budget");

module.exports = {
  addCategory: function(req, res) {
    var body = req.body;
    Budget.create(body, function(err, budgets) {
      if (err) {
        res.json(err);
      }
      res.json(budgets);
    });
  },

  getCategory: function(req, res) {
    Budget.find({}, function(err, budgets) {
      if(err) {
        res.json(err);
      }
      res.json(budgets);
    });
  }
};