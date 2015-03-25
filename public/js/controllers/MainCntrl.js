var main = angular.module("main", []);

main.controller('MainCntrl', ['$scope', 'getResource', 'Data', '$rootScope', '$location', '$cookies', function($scope, getResource, Data, $rootScope, $location, $cookies){
  $scope.user = Data;

  $scope.login = function() {
    $rootScope.username = $scope.username;
    $scope.details = {
      username: $scope.username,
      password: $scope.password
    };
    getResource.verifyUser($scope.details).success(function (data) {
      console.log(data);
      $rootScope.user = data;
      $scope.currentUser = data;
      $location.path('/users/preference');
    }).error(function(err) {
      console.log(err);
    });
    getResource.setCookies($scope.currentUser);
    console.log(getResource.setCookies($scope.currentUser));
  };
}]);