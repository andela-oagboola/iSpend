var main = angular.module("main", []);

main.controller('MainCntrl', ['$scope', 'getResource', 'Data', '$location', '$window', function($scope, getResource, Data, $location, $window) {
  console.log("getResource.loggedInUser");
  $scope.currentUser = getResource.loggedInUser();
  console.log($scope.currentUser);
  if ($scope.currentUser) {
    // $rootScope.user = JSON.parse($window.sessionStorage.currUser);
    // $scope.currentUser = $scope.currentUser;
    $location.path('/users/preference');
    return;
  }
  $scope.welcome = "";
  $scope.login = function() {
    console.log("clicked");
    $scope.wrongDetails = true;
    $scope.welcome = "Signed in as " + $scope.username;
    $scope.details = {
      username: $scope.username,
      password: $scope.password
    };
    getResource.verifyUser($scope.details).success(function(data) {
      $window.sessionStorage.currUser = JSON.stringify(data);
      $scope.currentUser = JSON.parse($window.sessionStorage.currUser);
      // console.log($window.sessionStorage.currUser);
      // console.log($rootScope.user);
      $scope.currentUser.username = data.username;
      $location.path('/users/preference');
    }).error(function(err) {
      if (err.message === "Missing credentials") {
        $scope.wrongDetails = false;
        $scope.emptyDetails = true;
      } else {
        $scope.emptyDetails = false;
        $scope.wrongDetails = true;
      }
      console.log(err);
    });

    $scope.username = "";
    $scope.password = "";
  };
}]);
