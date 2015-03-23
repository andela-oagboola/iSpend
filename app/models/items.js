var mongoose = require("mongoose");
var itemSchema = mongoose.Schema({
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
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Budgets"
  }
});
module.exports = mongoose.model("Items", itemSchema, "Items");