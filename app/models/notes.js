var mongoose = require("mongoose");
var noteSchema = mongoose.Schema({
  title: {
    type: String,
    default: Date.now
  },
  content: {
    type: String,
    default: "No Note added"
  },
  status: {
    deleted: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  }
});
module.exports = mongoose.model('Notes', noteSchema, 'Notes');
