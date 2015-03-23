var expense = angular.module("expense", []);

expense.controller('expenseCntrl', ['$scope', '$rootScope', 'category', 'User', function($scope, $rootScope, category, User){

  User.getUserDetails().success(function(data) {
    // $scope.user_id = data.user_id;
  });
  category.getCategory().success(function(data) {
    console.log(data);
    $scope.categories = data;
  });
  $scope.newCategory = true;
  $scope.createCategory = function(index) {
    console.log(index);
    $scope.newbudget = true;
    $scope.newCategory = false;
  };
  $scope.addCategory = function() {
    $scope.name = $rootScope.username;
    $scope.budget = {
      category_name: $scope.category,
      estimate: $scope.estimate,
      user_id: "550bddc97bbe170d684273d0"
      //user_id:  $scope.user_id
    };
    $scope.categories.push({category_name: $scope.category, estimate: $scope.estimate});
    category.newCategory($scope.budget).success(function(data) {
      console.log(data);
    });
  };
}]);
//use index to select each items category name from the list