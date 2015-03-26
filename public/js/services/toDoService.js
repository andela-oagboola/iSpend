var toDoService = angular.module("toDoService", []);
toDoService.factory('toDo', ['$http', function($http){
  return {
    addToDo: function (toDo) {
      return $http.post('/toDo/addTodo', toDo);
    },
    getToDo: function(userId) {
      return $http.get('/toDo/' + userId);
    }
  };
}]);