var Users = require("../models/users");
module.exports = {
  getSingleUser: function(req, res) {
    Users.find({"username":""}, function() {});
  }
};