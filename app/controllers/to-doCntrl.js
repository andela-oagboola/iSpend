var ToDo = require("../models/to-do");

module.exports = {
  addToDo: function(req, res) {
    var body = req.params.body;
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
    var body = req.params.body;
    ToDo.remove({_id: body._id}, function(err, toDo) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(toDo);
      }
    });
  }
};