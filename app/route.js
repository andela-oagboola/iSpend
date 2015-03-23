var Users = require("./controllers/usersCntrl");
var Budget = require("./controllers/budgetCntrl");
module.exports = function(app) {
  app.get('/users', Users.authenticate, Users.getUsers);

  app.get('/', function(req, res) {
    res.sendfile("./public/views/index.html");
  });

  app.post('/signUp', Users.newUser);

  app.post('/users/preference/:username/expenseManager', Budget.addCategory);

  app.get('/users/preference/:username/expenseManager', Budget.getCategory);

  app.post('/login', Users.login);

  app.get('/logout', Users.logout);
};
