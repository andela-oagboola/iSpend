var services = angular.module("expenseApp");
services.factory('getResource', ['$http', '$cookies', function($http, $cookies){
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
    setCookies: function (user) {
      $cookies.put('loggedInUser', user);
      var presentUser = $cookies.get('loggedInUser');
      return presentUser;
    }
  };
  
}]);