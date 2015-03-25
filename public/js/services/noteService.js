var noteService = angular.module("noteService", []);
noteService.factory('notes', ['$http', function($http) {
  return {
    createNote: function(note) {
      return $http.post('/note/newnote', note);
    },
    getNotes: function(userId) {
      return $http.get('/notes/' + userId);
    },
    updateNote: function(note, userId) {
      return $http.post('/update/note/' + userId, note);
    }
  };
}]);