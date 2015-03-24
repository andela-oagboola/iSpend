var Users = require("./controllers/usersCntrl");
var Budget = require("./controllers/budgetCntrl");
var Item = require("./controllers/itemCntrl");
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendfile("./public/views/index.html");
  });

  app.get('/budgets', Budget.getBudgets);
  
  app.get('/users', Users.getUsers);

  app.post('/item/newitem', Item.addItem);

  // app.post('/users/:userId/new-budget', Users.addBudget);

  app.post('/budget/new-budget', Budget.addBudget);

  app.get('/users/:userId', Users.getSingleUser);

  app.get('/budget/:budgetId', Budget.getEachBudget);

  app.post('/signUp', Users.addUser);

  app.get('/budget/:userId/budget', Budget.getUserBudget);

  app.get('/items', Item.getAllItems);

  app.post('/login', Users.login);

  app.get('/logout', Users.logout); 
};
