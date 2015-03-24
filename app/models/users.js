var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
var userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
  // budget: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Budgets",
  //   default: new ObjectId()
  // }
});

userSchema.methods.validPassword = function(password) {
  console.log(this.password, password);
  return this.password === password;
};
module.exports = mongoose.model('Users', userSchema, 'Users');