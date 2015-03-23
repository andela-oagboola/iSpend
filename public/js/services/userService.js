var userService = angular.module("userService", []);
userService.factory("User", function($http) {
  return {
    getUserDetails: function() {
      return $http.get('/users');
    }
  };
});