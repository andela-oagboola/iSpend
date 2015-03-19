var expenseApp = angular.module("expenseApp", ['ngRoute']);

expenseApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "/views/home.html",
    controller: "MainCntrl"
  })
  .when('/signUp', {
    templateUrl: "/views/signUp.html"
  });
}]);