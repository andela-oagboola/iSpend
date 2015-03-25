var expense = angular.module("expense", []);

expense.controller('expenseCntrl', ['$scope', '$rootScope', 'budget', 'User', '$timeout', function($scope, $rootScope, budget, User, $timeout){
  $scope.user = $rootScope.user;
  $scope.amountSpent = 0;
  console.log($scope.user);
  budget.getUserBudget($scope.user._id).success(function(data) {
    console.log(data);
    $scope.categories = data;
  });
  // $scope.newCategory = true;
  $scope.createCategory = function() {
    $budgetSummary = false;
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

    $scope.categories.push({name: $scope.category, estimate: $scope.estimate});
    
    budget.newBudget($scope.budget).success(function(data) {
      console.log(data);
    }).error(function(err) {
      console.log(err);
    });
  };
  $scope.viewCatgeory = function(index) {
    $scope.budget = $scope.categories[index];
    $scope.estimateValue = $scope.budget.estimate;
    $scope.newbudget = false;
    $scope.budgetSummary = true;
    budget.getItems($scope.budget._id).success(function (result) {
      console.log(result);
      $scope.items = result;
      $scope.amountSpent = 0;
      angular.forEach($scope.items, function(item) {
        $scope.amountSpent += item.price;
      });
    });
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
      $scope.items.push({name: $scope.item, price: $scope.price});
    }).error(function(err) {
      console.log(err);
    });
  };
}]);





