var expense = angular.module("expense", []);

expense.controller('expenseCntrl', ['$scope', '$rootScope', 'budget', 'User', '$timeout', function($scope, $rootScope, budget, User, $timeout){
  $scope.user = $rootScope.user;
  // User.getUserDetails().success(function(data) {
  //   $scope.user_id = data[0]._id;
  //   console.log($scope.user_id);
  // });
  budget.getUserBudget($scope.user._id).success(function(data) {
    console.log(data);
    $scope.categories = data;
  });
  $scope.newCategory = true;
  $scope.createCategory = function() {
    $scope.newbudget = true;
    $scope.newCategory = false;
  };
  $scope.addCategory = function() {
    console.log($scope.user);
    $scope.name = $rootScope.username;
    $scope.budget = {
      name: $scope.category,
      estimate: $scope.estimate,
      user:  $scope.user._id
    };

    $scope.categories.push({name: $scope.category, estimate: $scope.estimate});
    
    budget.newBudget($scope.budget).success(function(data) {
      console.log(data);
    }).error(function(err) {
      console.log(err);
    });
  };
  $scope.viewCatgeory = function(index) {
    console.log("clicked");
    $scope.user_id = $scope.categories[index].user_id;
    budget.getItems($scope.user_id).success(function () {});
  };
}]);