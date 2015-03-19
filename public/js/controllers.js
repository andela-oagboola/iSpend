var controllers= angular.module("expenseApp");

controllers.controller('MainCntrl', ['$scope', 'getResource', function($scope, getResource){
  $scope.login = function() {
    getResource.verifyUser($scope.username, $scope.password).success(function (data) {
      console.log(data);
    });
  };
}]);