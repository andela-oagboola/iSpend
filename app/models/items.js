var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var itemSchema = Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  budget: {
    type:  Schema.ObjectId
  }
});
module.exports = mongoose.model("Items", itemSchema, "Items");