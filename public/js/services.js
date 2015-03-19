var services = angular.module("expenseApp");
services.factory('getResource', ['$http', function($http){
  return {
    verifyUser: function (name, pwd) {
      return $http.get('/users');
    }
  };
}]);