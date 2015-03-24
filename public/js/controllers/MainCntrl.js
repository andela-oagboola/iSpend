var main = angular.module("main", []);

main.controller('MainCntrl', ['$scope', 'getResource', 'Data', '$rootScope', '$location', function($scope, getResource, Data, $rootScope, $location){
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
      $location.path('/users/preference');
    }).error(function(err) {
      console.log(err);
    });
  };
}]);