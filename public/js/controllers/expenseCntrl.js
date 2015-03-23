var expense = angular.module("expense", []);

expense.controller('expenseCntrl', ['$scope', '$rootScope', 'category', 'User', function($scope, $rootScope, category, User){

  User.getUserDetails().success(function(data) {
    $scope.user_id = data[0]._id;
    //console.log($scope.user_id);
  });
  category.getCategory().success(function(data) {
    console.log(data);
    $scope.categories = data;
  });
  $scope.newCategory = true;
  $scope.createCategory = function() {
    $scope.newbudget = true;
    $scope.newCategory = false;
  };
  $scope.addCategory = function() {
    console.log($scope.user_id);
    $scope.name = $rootScope.username;
    $scope.budget = {
      category_name: $scope.category,
      estimate: $scope.estimate,
      user:  $scope.user_id
    };
    $scope.categories.push({category_name: $scope.category, estimate: $scope.estimate});
    category.newCategory($scope.budget).success(function(data) {
      console.log(data);
    });
  };
  $scope.viewCatgeory = function(index) {
    console.log("clicked");
    $scope.user_id = $scope.categories[index].user_id;
    category.getItems($scope.user_id).success(function () {});
  };
}]);