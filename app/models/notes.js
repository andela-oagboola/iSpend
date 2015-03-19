var mongoose = require("mongoose");
var noteSchema = mongoose.Schema({
   content: {
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
  //userId: {}
});
module.export = mongoose.model('notes', toDoSchema, 'notes');