var services = angular.module("expenseApp");
services.factory('getResource', ['$http', function($http){
  return {
    verifyUser: function (details) {
       return $http.post('/login', details);
    },
    createUser: function(User) {
      return $http.post('/signUp', User);
    }
  };
}]);