var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var budgetSchema = mongoose.Schema({
  name: {
   type: String
  },
  estimate: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  item: {
    type: Schema.ObjectId,
    ref: "Items",
    default: null
  },
  user: {
    type:  Schema.ObjectId
  }
});
module.exports = mongoose.model('Budgets', budgetSchema, 'Budgets');