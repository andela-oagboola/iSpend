var Items = require("../models/items");

module.exports = {
  addItem: function(req, res) {
    var body = req.body;
    Items.create(body, function(err, item) {
      if (err) {
        res.json(err);
      }
      res.json(item);
    });
  },

  getAllItems: function (req, res) {
    Items.find({}).exec( function(err, items) {
      if(err) {
        res.json(err);
      }
      res.json(items);
    });
  },

  getItemByBudget: function(req, res) {
    Items.find({budget: req.params.budgetId}, function(err, items) {
      if(err) {
        res.json(err);
      }
      res.json(items);
    });
  },

  deleteItem: function(req, res) {
    Items.remove({_id: req.params.itemId}, function(err, note) {
      if(err) {
        res.json(err);
      }
      else {
        console.log(note);
      }
    });
  }
};