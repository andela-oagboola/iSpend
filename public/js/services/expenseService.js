var expenseService = angular.module("expenseService", []);
expenseService.factory("budget", function($http) {
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
    }
  };
});