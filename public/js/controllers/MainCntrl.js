var main = angular.module("main", []);

main.controller('MainCntrl', ['$scope', 'getResource', 'Data', '$rootScope', '$location', '$cookies', function($scope, getResource, Data, $rootScope, $location, $cookies){
  //$scope.user = Data;
  $scope.welcome = "";
  $scope.login = function() {
    
    $scope.welcome = "Signed in as " + $scope.username;
    $scope.details = {
      username: $scope.username,
      password: $scope.password
    };
    getResource.verifyUser($scope.details).success(function (data) {
      $rootScope.user = data;
      $scope.currentUser = data;
      $rootScope.username = data.username;
      $location.path('/users/preference');
    }).error(function(err) {
      console.log(err);
    });

    $scope.username = "";
    $scope.password = "";
    getResource.setCookies($scope.currentUser);
    console.log(getResource.setCookies($scope.currentUser));
  };
}]);