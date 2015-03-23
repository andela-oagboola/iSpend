var expenseService = angular.module("expenseService", []);
expenseService.factory("category", function($http) {
  return {
    newCategory: function (newBudget) {
      return $http.post('/users/new-category', newBudget);
    },
    getCategory: function() {
      return $http.get('/categories');
    },
    getItems: function(userId) {
      return $http.get('/users/categories/:userId');
    }
  };
});