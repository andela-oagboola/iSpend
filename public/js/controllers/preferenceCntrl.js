var preference = angular.module("preference", []);
preference.controller('preferenceCntrl', ['$scope', 'getResource', function($scope, getResource){
  $scope.user = getResource.loggedInUser;
  $scope.name = $scope.user.username;
  //$scope.user = $scope.name;
}]);