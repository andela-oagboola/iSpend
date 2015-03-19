var users = require("./models/users");
//console.log(users);
module.exports = function(app) {
  app.get('/users', function(req, res) {
    // console.log(users);
    users.find({}, function(err, user) {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  });

  // app.post('/users', function(req, res) {
  //   var body = req.body;
  //   user = new User(body);
  //   user.save(function() {});
  // });

  app.get('/', function(req, res) {
    // var name = req.params.biro;
    // user.find({
    //  name: name
    // },function(err, data)) {
    // }
    //console.log(req);
    res.sendfile("./public/views/index.html");
  });
};
