var expense = angular.module("expense", []);

expense.controller('expenseCntrl', ['$scope', 'budget', 'User', '$timeout', 'getResource', function($scope, budget, User, $timeout, getResource){
  $scope.currentUser = getResource.loggedInUser();
  $scope.noCategory = false;
  $scope.noItems = false;
  $scope.user = $scope.currentUser;
  $scope.amountSpent = 0;
  $scope.custom = "₦";

  $scope.displayBudgets = function() {
    budget.getUserBudget($scope.user._id).success(function(data) {
      if(data.length === 0) {
          $scope.noCategory = true;
      }
    $scope.categories = data.reverse();
    $scope.timeCreated = data.createdAt;
  }).error(function (err) {
    console.log(err);
  });
  };
  $scope.displayBudgets();
  $scope.createCategory = function() {
    $scope.budgetSummary = false;
    $scope.newbudget = true;
    $scope.addItemField = false;
  };
  $scope.addCategory = function() {
    if (!$scope.category || !$scope.estimate) {
      return alert("fields cannot be empty");
    }
    else if (isNaN(Number($scope.estimate))) {
      return alert("enter valid estimate");
    }
    $scope.name = $scope.user.username;
    $scope.budget = {
      name: $scope.category,
      estimate: $scope.estimate,
      user:  $scope.user._id
    };
  
    budget.newBudget($scope.budget).success(function(data) {
      $scope.noCategory = false;
    }).error(function(err) {
      console.log(err);
    });
    $scope.displayBudgets();

    $scope.category = "";
    $scope.estimate = "";
  };
  $scope.viewCatgeory = function(index) {
    $scope.noItems = false;
    $scope.absoluteValue = 0;
    $scope.budget = $scope.categories[index];
    $scope.clickedCategory = $scope.categories[index].name;
    $scope.estimateValue = $scope.budget.estimate;
    $scope.newbudget = false;
    $scope.budgetSummary = true;
    $scope.itemsColumn = true;
    $scope.addItemField = false;

    $scope.displayItems = function() {
      budget.getItems($scope.budget._id).success(function (result) {
        if(result.length === 0) {
          $scope.noItems = true;
        }
        $scope.items = result.reverse();
        $scope.amountSpent = 0;
        angular.forEach($scope.items, function(item) {
          $scope.amountSpent += item.price;
          $scope.difference = $scope.estimateValue - $scope.amountSpent;
          // console.log("difference ", $scope.difference);
          // console.log("estimate ", $scope.estimateValue);
          // console.log("amountSpent ", $scope.amountSpent);
          // if($scope.amountSpent === 0){
          //   $scope.less = false;
          //   $scope.more = false;
          //   $scope.none = true;
          //   $scope.equal = false;
          // }
          if($scope.amountSpent === 0) {
              $scope.less = false;
              $scope.more = false;
              $scope.none = true;
              $scope.equal = false;
            }
          if ($scope.difference < 0) {
              $scope.absoluteValue = Math.abs($scope.difference);
              $scope.less = false;
              $scope.more = true;
              $scope.none = false;
              $scope.equal = false;
          }
          else if($scope.difference > 0){
            $scope.absoluteValue = Math.abs($scope.difference);
            if(0 === $scope.amountSpent) {
              $scope.less = false;
              $scope.more = false;
              $scope.none = true;
              $scope.equal = false;
            }
            else{
              $scope.less = true;
              $scope.more = false;
              $scope.none = false;
              $scope.equal = false;
            }
            
          }
          else if($scope.difference === 0) {
            $scope.less = false;
            $scope.more = false;
            $scope.none = false;
            $scope.equal = true;
          }
        });
      }); 
    };
    $scope.displayItems();
  };

  $scope.addMoreItems = function() {
    $scope.addItemField = true;
  };

  $scope.addItem = function() {
    $scope.addItemField = false;
    if (!$scope.item.length || !$scope.price.length) {
      return alert("fields cannot be empty");
    }
    else if (isNaN(Number($scope.price))) {
      return alert("enter valid price");
    }
    $scope.newItem = {
      name: $scope.item,
      price: $scope.price,
      budget: $scope.budget._id
    };
    budget.addItem($scope.newItem).success(function (res) {
      $scope.noItems = false;
    }).error(function(err) {
      console.log(err);
    });
    $scope.displayItems();
    $scope.item = "";
    $scope.price = "";
  };

  $scope.deleteItem = function (index) {
    $scope.confirm = confirm("Delete \"" + $scope.items[index].name + "\" ?");
    if($scope.confirm) {
      budget.deleteItem($scope.items[index]._id).success(function () {}).error(function(err) {
        console.log(err);
      });
      $scope.displayItems();
      // alert("item deleted");
    } 
  };

  $scope.deleteBudget = function(index) {
    $scope.budgetToDelete = $scope.categories[index]._id;
    $scope.confirm = confirm("Delete the \"" + $scope.categories[index].name + "\" category ?");
    if ($scope.confirm === true) {
      budget.getItems($scope.budgetToDelete).success(function (result) {
        angular.forEach(result, function(item) {
          budget.deleteItem(item._id).success(function () {}).error(function(err) {
            console.log(err);
          });
        });
        // $scope.displayItems();
        // $scope.noItems = true;
      });
      budget.deleteBudget($scope.budgetToDelete).success(function () {
        alert("category deleted");
      }).error(function () {});
      $scope.displayBudgets();
      $scope.itemsColumn = false;
    }
  };
}]);