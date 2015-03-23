var getSingleUser = angular.module("getSingleUser", []);
getSingleUser.factory("getUser", function() {
  return {
    singleUser: function() {
      $http.get('/user/:username');
    }
  };
});