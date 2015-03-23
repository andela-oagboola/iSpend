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

  getItemByCategory: function(req, res) {
    Item.findById("");
  },

  deleteItem: function(req, res) {
    var body = req.params.body;
    Items.remove({_id: body._id}, function(err, note) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(note);
      }
    });
  }
};