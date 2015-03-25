var users = require("./controllers/usersCntrl");
var Budget = require("./controllers/budgetCntrl");
var Item = require("./controllers/itemCntrl");
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendfile("./public/views/index.html");
  });

  app.get('/budgets', users.authenticate, Budget.getBudgets);
  
  app.get('/users', users.authenticate, users.getUsers);

  app.post('/item/newitem', Item.addItem);

  // app.post('/users/:userId/new-budget', users.addBudget);

  app.post('/budget/new-budget', Budget.addBudget);

  app.get('/users/:userId', users.getSingleUser);

  app.get('/budget/:budgetId', Budget.getEachBudget);

  app.post('/signUp', users.addUser);

  app.get('/budgets/:userId', Budget.getUserBudget);

  app.get('/items', Item.getAllItems);

  app.get('/items/:budgetId', Item.getItemByBudget);

  app.post('/login', users.login);

  app.get('/logout', users.logout); 
};
