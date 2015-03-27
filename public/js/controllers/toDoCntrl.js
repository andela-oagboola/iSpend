var toDo = angular.module("toDo", []);
toDo.controller('toDoCntrl', ['$scope', 'toDo', '$rootScope', function($scope, toDo, $rootScope){
  $scope.user = $rootScope.user;

  $scope.displayToDo = function() {
    toDo.getToDo($scope.user._id).success(function(result) {
    $scope.toDos = result;
    }).error(function(err) {
      console.log(err);
    });
  };
  $scope.displayToDo();
  $scope.newTodo = function() {
    $scope.newToDoField = true;
  };
  $scope.createToDo = function() {
    $scope.myToDo = {
      item: $scope.toDo,
      user: $scope.user._id
    };
    toDo.addToDo($scope.myToDo).success(function(result) {
    }).error(function(err) {
      console.log(err);
    });
    $scope.newToDoField = false;
    $scope.displayToDo();
    $scope.toDo = "";
  };

  $scope.strikeMe = function(index) {
    $scope.selectedIndex = index;
  };

  $scope.deleteItem = function(index) {
    $scope.itemToBeDeleted = $scope.toDos[index]._id;
    toDo.delete($scope.itemToBeDeleted).success(function(res) {
    }).error(function(err) {
      console.log(err);
    });
    $scope.displayToDo();
  };
}]);

toDo.directive('itemStriker', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('click', function() {
        element.toggleClass('strikeMe');
      });
    }
  };
});
