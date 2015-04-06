var services = angular.module("expenseApp");
services.factory('getResource', ['$http', '$cookies', '$window', function($http, $cookies, $window){
  // console.log($window.sessionStorage.currUser);
  return {
    verifyUser: function (details) {
       return $http.post('/login', details);
    },
    createUser: function(User) {
      return $http.post('/signUp', User);
    },
    currentUser: function(user) {
      return user;
    },
    loggedInUser : JSON.parse($window.sessionStorage.currUser)
  };
}]);