var mongoose = require("mongoose");
var toDoSchema = mongoose.Schema({
  item: {
    type: String,
  },
  status: {
    type: Boolean,
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
module.exports = mongoose.model('ToDo', toDoSchema, 'ToDo');