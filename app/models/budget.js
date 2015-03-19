var mongoose = require('mongoose');
var budgetSchema = mongoose.Schema(
{
  category_name: [{
   estimate: { type: Number},
   item: {
      item_name: { type: String },
      price:     { type: Number }
    }
  }],
  user_id: {type: String}
});

module.export = mongoose.model('budgets', budgetSchema, 'budgets');