var signUp = angular.module("signUp", []);
signUp.controller('signUpCntrl', ['$scope', 'getResource', '$rootScope', function($scope, getResource, $rootScope) {
  $scope.signUp = function() {
    if (!$scope.firstname || !$scope.surname || !$scope.username || !$scope.passwrd || !$scope.email) {
      return alert("please fill all fields");
    }
    $scope.User = {
      firstname: $scope.firstname,
      surname: $scope.surname,
      username: $scope.username,
      password: $scope.passwrd,
      email: $scope.email
    };
    getResource.createUser($scope.User).success(function (data) {
      console.log("yerhh ",data);
    });
    $scope.firstname = "";
    $scope.surname = "";
    $scope.username = "";
    $scope.passwrd = "";
    $scope.email = "";
  };
}]);