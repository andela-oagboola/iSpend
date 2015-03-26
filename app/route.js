var users = require("./controllers/usersCntrl");
var Budget = require("./controllers/budgetCntrl");
var Item = require("./controllers/itemCntrl");
var note = require("./controllers/notesCntrl");
var toDo = require("./controllers/to-doCntrl");

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

  app.get('/notes', note.getAllNotes);

  app.post('/note/newnote', note.addNote);

  app.get('/notes/:userId', note.getNoteByUser);

  app.post('/update/note/:noteId', note.updateNote);

  app.post('/toDo/addTodo', toDo.addToDo);

  app.get('/toDo', toDo.getAllToDo);

  app.get('/toDo/:userId', toDo.getUserToDo);

  app.post('/toDo/delete/:itemId', toDo.deleteToDo);

  app.post('/login', users.login);

  app.get('/logout', users.logout); 
};
