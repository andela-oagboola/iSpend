var preference = angular.module("preference", []);
preference.controller('preferenceCntrl', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.user = $rootScope.user;
  console.log($scope.user);
  $scope.name = $scope.user.username;
  console.log($scope.user.username);
  console.log($scope.user["_id"]);
  //$scope.user = $scope.name;
}]);