var mongoose = require("mongoose");
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
  },
});

userSchema.methods.validPassword = function(password) {
  console.log(this.password, password);
  return this.password === password;
};
module.exports = mongoose.model('Users', userSchema, 'Users');