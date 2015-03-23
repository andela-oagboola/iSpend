var Users = require("./controllers/usersCntrl");
var Budget = require("./controllers/budgetCntrl");
var Item = require("./controllers/itemCntrl");
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendfile("./public/views/index.html");
  });

  app.get('/users', Users.getUsers);

  app.get('/categories', Budget.getCategories);

  app.post('/users/newitem', Item.addItem);

  app.post('/users/new-category', Budget.addCategory);

  app.get('/users/:userId', Users.getSingleUser);

  app.post('/signUp', Users.addUser);

  app.get('/users/category/:categoryId', Budget.getEachCategory);

  app.get('/users/:userId/category/', Budget.getUserCategories);

  app.get('/items', Item.getAllItems);

  app.post('/login', Users.login);

  app.get('/logout', Users.logout);
};
