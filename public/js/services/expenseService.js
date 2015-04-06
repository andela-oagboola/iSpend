var expenseService = angular.module("expenseService", []);
expenseService.factory("budget", function($http, $cookies) {
  return {
    newBudget: function (newBudget) {
      return $http.post('/budget/new-budget', newBudget);
    },
    getBudget: function() {
      return $http.get('/budgets');
    },

    getUserBudget: function(userId) {
      return $http.get('/budgets/' + userId);
    },
    getItems: function(budgetId) {
      return $http.get('/items/' + budgetId);
    },
    addItem: function(item) {
      return $http.post('/item/newitem', item);
    },
    deleteItem: function(itemId) {
      return $http.post('/items/delete/' + itemId);
    },
    deleteBudget: function(budgetId) {
      return $http.post('/budget/delete/' + budgetId);
    }
  };
});