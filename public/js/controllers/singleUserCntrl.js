var getOneUser = angular.module("retrieveUser", []);
getOneUser.controller("getSingleUser",['$scope', function($scope) {
  $scope.name = $rootScope.name;
}]);