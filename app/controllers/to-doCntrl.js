var ToDo = require("../models/to-do");

module.exports = {
  addToDo: function(req, res) {
    var body = req.body;
    ToDo.create(body, function(err, toDo) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(toDo);
      }
    });
  },

  getAllToDo: function(req, res) {
    ToDo.find({}, function(err, toDo) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(toDo);
      }
    });
  },

  deleteToDo: function(req, res) {
    ToDo.remove({_id: req.params.itemId}, function(err, toDo) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(toDo);
      }
    });
  },

  getUserToDo: function(req, res) {
    ToDo.find({user: req.params.userId}, function(err, toDo) {
      if(err) {
        res.json(err);
      }
      res.json(toDo);
    });
  }
};