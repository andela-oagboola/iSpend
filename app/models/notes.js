var mongoose = require("mongoose");
var noteSchema = mongoose.Schema({
  content: {
    type: String,
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
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  }
});
module.exports = mongoose.model('Notes', toDoSchema, 'Notes');
