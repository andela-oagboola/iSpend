var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  user_password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('users', userSchema, 'users');