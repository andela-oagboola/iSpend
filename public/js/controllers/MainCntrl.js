var main = angular.module("main", []);

main.controller('MainCntrl', ['$scope', 'getResource', 'Data', '$rootScope', '$location', '$cookies', '$window', function($scope, getResource, Data, $rootScope, $location, $cookies, $window){
  //$scope.user = Data;
  if ($window.sessionStorage.currUser) {
    $rootScope.user = JSON.parse($window.sessionStorage.currUser);
    console.log($window.sessionStorage.currUser);
  }
  $scope.welcome = "";
  $scope.login = function() {
    console.log("username ", $scope.username);
    $scope.wrongDetails = true;
    $scope.welcome = "Signed in as " + $scope.username;
    $scope.details = {
      username: $scope.username,
      password: $scope.password
    };
    getResource.verifyUser($scope.details).success(function (data) {
      // $rootScope.user = data;
      // console.log("d user", data);
      // $scope.currentUser = data;
      $window.sessionStorage.currUser = JSON.stringify(data);
      $rootScope.user = JSON.parse($window.sessionStorage.currUser);
      console.log($window.sessionStorage.currUser);
      console.log($rootScope.user);
      $rootScope.username = data.username;
      $location.path('/users/preference');
    }).error(function(err) {
      if(err.message === "Missing credentials") {
        $scope.wrongDetails = false;
        $scope.emptyDetails = true;
      }
      else {
        $scope.emptyDetails = false;
        $scope.wrongDetails = true;
      }
      console.log(err);
    });

    $scope.username = "";
    $scope.password = "";
    // getResource.setCookies($scope.currentUser);
    // console.log(getResource.setCookies($scope.currentUser));
  };
}]);