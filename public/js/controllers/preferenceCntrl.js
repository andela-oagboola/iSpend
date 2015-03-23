var preference = angular.module("preference", []);
preference.controller('preferenceCntrl', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.name = $rootScope.username;
  //$scope.user = $scope.name;
}]);