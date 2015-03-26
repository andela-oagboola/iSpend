var Notes = require("../models/notes");

module.exports = {
  addNote: function(req, res) {
    var body = req.body;
    console.log(body);
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
    var body = req.body;
    Notes.remove({_id: body._id}, function(err, note) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(note);
      }
    });
  },

  getAllNotes: function(req, res) {
    Notes.find({}, function(err, notes) {
      if(err) {
        res.json(err);
      }
      else {
        res.json(notes);
      }
    });
  },

  updateNote: function(req, res) {
    Notes.update({_id: req.params.noteId}, {$set: {title: req.body.title, content: req.body.content}}, function(err, number, raw) {
      if(err) {
        res.json(err);
      }
      res.json(raw);
    });
  },

  getNoteByUser: function(req, res) {
    console.log("hurray");
    Notes.find({user: req.params.userId}, function(err, notes) {
      if(err) {
        res.json(err);
      }
      res.json(notes);
    });
  }
};