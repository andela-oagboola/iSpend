var expenseService = angular.module("expenseService", []);
expenseService.factory("category", function($http) {
  return {
    newCategory: function (newBudget) {
      return $http.post('/users/preference/:username/expenseManager', newBudget);
    },
    getCategory: function() {
      return $http.get('/users/preference/:username/expenseManager');
    }
  };
});