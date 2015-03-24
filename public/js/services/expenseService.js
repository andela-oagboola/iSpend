var expenseService = angular.module("expenseService", []);
expenseService.factory("budget", function($http) {
  return {
    newBudget: function (newBudget) {
      return $http.post('/budget/new-budget', newBudget);
    },
    getBudget: function() {
      return $http.get('/budgets');
    },
    getItems: function(userId) {
      return $http.get('/users/categories/:userId');
    },
    // addToUser: function(budget, userId) {
    //   console.log(budget);
    //   // var userId = budget._id;
    //   return $http.post('/users/' + userId + '/new-budget', {budget: budget._id});
    // }
  };
});