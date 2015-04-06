var toDo = angular.module("toDo", []);
toDo.controller('toDoCntrl', ['$scope', 'toDo', 'getResource', function($scope, toDo, getResource){
  $scope.user = getResource.loggedInUser;
  $scope.noToDo = false;

  $scope.displayToDo = function() {
    toDo.getToDo($scope.user._id).success(function(result) {
      if(result.length === 0) {
        $scope.noToDo = true;
      }
      $scope.toDos = result.reverse();
    }).error(function(err) {
      console.log(err);
    });
  };
  $scope.displayToDo();
  $scope.newTodo = function() {
    $scope.newToDoField = true;
  };
  $scope.createToDo = function() {
    if(!$scope.toDo) {
      return alert("you canot add empty to-do");
    }
    $scope.myToDo = {
      item: $scope.toDo,
      user: $scope.user._id
    };
    toDo.addToDo($scope.myToDo).success(function(result) {
      $scope.noToDo = false;
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
    $scope.confirm = confirm("Are you sure you want to delete \"" + $scope.toDos[index].item + "\" ?");
    if($scope.confirm === true) {
      $scope.itemToBeDeleted = $scope.toDos[index]._id;
      toDo.delete($scope.itemToBeDeleted).success(function(res) {
      }).error(function(err) {
        console.log(err);
      });
      $scope.displayToDo();
      alert("Deleted!");
    }
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
