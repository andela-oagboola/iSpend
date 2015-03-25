var expenseApp = angular.module("expenseApp", [
  'ngRoute',
  'main',
  'signUp',
  'preference',
  'expense',
  'toDo',
  'note',
  'noteService',
  'nameBroadcast',
  'expenseService',
  'userService',
  'getSingleUser',
  'retrieveUser',
  'categoryMod',
  'categoryService'
  ]);

expenseApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "/views/home.html",
    controller: "MainCntrl"
  })
  .when('/signUp', {
    templateUrl: "/views/signUp.html",
    controller: "signUpCntrl"
  })
  .when('/users/preference', {
    templateUrl: "/views/preference.html",
    controller: "preferenceCntrl"
  })
  .when('/users/preference/:username/expenseManager', {
    templateUrl: "/views/expenseManager.html",
    controller: "expenseCntrl"
  })
  .when('/users/preference/:username/toDo', {
    templateUrl: "/views/toDo.html",
    controller: "toDoCntrl"
  })
  .when('/users/preference/:username/notes', {
    templateUrl: "/views/notes.html",
    controller: "noteCntrl"
  })
  .when('users/categories/:username/:categoryName', {
    templateUrl: '/views/categories.html',
    controller: 'categoryCntrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);