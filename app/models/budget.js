var mongoose = require('mongoose');
var budgetSchema = mongoose.Schema({
  category_name: {
   type: String
  },
  estimate: {
    type: String
  },
  // user_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Users"
  // },
  user_id: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Budgets', budgetSchema, 'Budgets');