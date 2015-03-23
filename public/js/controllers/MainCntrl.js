var main = angular.module("main", []);

main.controller('MainCntrl', ['$scope', 'getResource', 'Data', '$rootScope', function($scope, getResource, Data, $rootScope){
  $scope.user = Data;
  $scope.login = function() {
    //console.log($scope.name);
    $rootScope.username = $scope.username;
    $scope.details = {
      username: $scope.username,
      passowrd: $scope.password
    };
    getResource.verifyUser($scope.details).success(function (data) {
      console.log(data);
    });
  };
}]);