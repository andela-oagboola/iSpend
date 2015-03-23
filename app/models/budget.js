var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var budgetSchema = mongoose.Schema({
  category_name: {
   type: String
  },
  estimate: {
    type: Number
  },
  user: {
    type: Schema.ObjectId,
    ref: "Users"
  },
  // user_id: {
  //   type: String,
  //   ref: 'Users'
  // },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Budgets', budgetSchema, 'Budgets');