var note = angular.module("note", []);
note.controller('noteCntrl', ['$scope', 'notes', '$rootScope', function($scope, notes, $rootScope){
  $scope.user = $rootScope.user;

  $scope.displayNotes = function() {
    notes.getNotes($scope.user._id).success(function(result) {
      $scope.retrievedNotes = result;
      console.log(result);
    });
  };
  $scope.displayNotes();
  $scope.showNoteArea = function() {
    $scope.existingNoteField = false;
    $scope.newNoteField = true;
  };
  $scope.createNote = function() {
    $scope.existingNoteField = false;
    $scope.note = {
      title: $scope.newTitle,
      content: $scope.newNote,
      user: $scope.user._id
    };
    notes.createNote($scope.note).success(function(result) {
      console.log(result);
    }).error(function(err) {
      console.log(err);
    });
    $scope.displayNotes();
  };
  $scope.updateNote = function() {
    $scope.existingNoteField = false;
    $scope.newNoteField = true;
    $scope.note = {
      title: $scope.existingTitle,
      content: $scope.existingNote
    };
    notes.updateNote($scope.note, $scope.selectedNote._id).success(function(res) {
      console.log(res);
    }).error(function(err) {
      console.log(err);
    });
    $scope.displayNotes();
  };
  $scope.viewNote = function(index) {
    $scope.selectedNote = $scope.retrievedNotes[index];
    $scope.existingTitle = $scope.selectedNote.title;
    $scope.existingNote = $scope.selectedNote.content;
    $scope.existingNoteField = true;
    $scope.newNoteField = false;
  };
}]);