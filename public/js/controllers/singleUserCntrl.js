var getOneUser = angular.module("retrieveUser", []);
getOneUser.controller("getSingleUser",['$scope', 'getResource', function($scope, getResource) {
  $scope.name = $rootScope.name;
}]);