var signUp = angular.module("signUp", []);
signUp.controller('signUpCntrl', ['$scope', 'getResource', '$rootScope', function($scope, getResource, $rootScope) {
  $scope.signUp = function() {
      $scope.User = {
        firstname: $scope.firstname,
        surname: $scope.surname,
        username: $scope.username,
        password: $scope.passwrd,
        email: $scope.email
      };
      // $scope.username = $rootScope.username;
      $rootScope.username = $scope.username;
      getResource.createUser($scope.User).success(function (data) {
        console.log("yerhh ",data);
      });
    };
}]);