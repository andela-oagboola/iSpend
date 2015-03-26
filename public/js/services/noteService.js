var noteService = angular.module("noteService", []);
noteService.factory('notes', ['$http', function($http) {
  return {
    createNote: function(note) {
      return $http.post('/note/newnote', note);
    },
    getNotes: function(userId) {
      return $http.get('/notes/' + userId);
    },
    updateNote: function(note, noteId) {
      return $http.post('/update/note/' + noteId, note);
    },
    deleteNote: function(noteId) {
      return $http.post('/note/delete/' + noteId);
    }
  };
}]);