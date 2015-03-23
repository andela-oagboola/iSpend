var Notes = require("../models/to-do");

module.exports = {
  addNote: function(req, res) {
    var body = req.params.body;
    Notes.create(body, function(err, note) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(note);
      }
    });
  },

  deleteNote: function(req, res) {
    var body = req.params.body;
    Notes.remove({_id: body._id}, function(err, note) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(note);
      }
    });
  },

  getAllNotes: function() {
    Notes.find({}, function(err, notes) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(notes);
      }
    });
  }
};