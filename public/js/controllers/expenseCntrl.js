var expense = angular.module("expense", []);

expense.controller('expenseCntrl', ['$scope', '$rootScope', 'budget', 'User', '$timeout', 'getResource',function($scope, $rootScope, budget, User, $timeout, getResource){
  $scope.user = $rootScope.user;
  $scope.amountSpent = 0;

  $scope.displayBudgets = function() {
    budget.getUserBudget($scope.user._id).success(function(data) {
    $scope.categories = data;
  });
  };
  $scope.displayBudgets();
  $scope.createCategory = function() {
    $scope.budgetSummary = false;
    $scope.newbudget = true;
  };
  $scope.addCategory = function() {
    console.log($scope.user);
    $scope.name = $rootScope.username;
    $scope.budget = {
      name: $scope.category,
      estimate: $scope.estimate,
      user:  $scope.user._id
    };
  
    budget.newBudget($scope.budget).success(function(data) {
      console.log(data);
    }).error(function(err) {
      console.log(err);
    });
    $scope.displayBudgets();
  };
  $scope.viewCatgeory = function(index) {
    $scope.budget = $scope.categories[index];
    $scope.clickedCategory = $scope.categories[index].name;
    $scope.estimateValue = $scope.budget.estimate;
    $scope.newbudget = false;
    $scope.budgetSummary = true;

    $scope.displayItems = function() {
      budget.getItems($scope.budget._id).success(function (result) {
      $scope.items = result;
      $scope.amountSpent = 0;
      angular.forEach($scope.items, function(item) {
        $scope.amountSpent += item.price;
      });
    });
    };
    $scope.displayItems();
  };

  $scope.addMoreItems = function() {
    $scope.addItemField= true;
  };

  $scope.addItem = function() {
    $scope.addItemField = false;
    $scope.newItem = {
      name: $scope.item,
      price: $scope.price,
      budget: $scope.budget._id
    };
    budget.addItem($scope.newItem).success(function (res) {
      console.log(res);
    }).error(function(err) {
      console.log(err);
    });
    $scope.displayItems();
  };
}]);