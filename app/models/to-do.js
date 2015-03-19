var mongoose = require("mongoose");
var toDoSchema = mongoose.Schema({
  item: {
    type: String,
  },
  timeCreated: {
    type: Date,
    default: Date.now
  },
  status: {
    deleted: Boolean,
    default: false
  }
  //userId
});
module.export = mongoose.model('toDo', toDoSchema, 'toDo');