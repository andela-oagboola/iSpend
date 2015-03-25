var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var budgetSchema = Schema({
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
  user: {
    type:  Schema.ObjectId
  }
});
module.exports = mongoose.model('Budgets', budgetSchema, 'Budgets');