var note = angular.module("note", []);
note.controller('noteCntrl', ['$scope', 'notes', '$rootScope', function($scope, notes, $rootScope){
  $scope.user = $rootScope.user;
  $scope.readonly = true;
  $scope.displayNotes = function() {
    notes.getNotes($scope.user._id).success(function(result) {
      $scope.retrievedNotes = result;
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
    }).error(function(err) {
      console.log(err);
    });
    $scope.displayNotes();
    $scope.newTitle = "";
    $scope.newNote = "";
  };
  $scope.updateNote = function() {
    $scope.existingNoteField = false;
    $scope.newNoteField = true;
    $scope.note = {
      title: $scope.existingTitle,
      content: $scope.existingNote
    };
    notes.updateNote($scope.note, $scope.selectedNote._id).success(function(res) {
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

  $scope.deleteNote = function(index) {
    $scope.confirmation = confirm("Do you really want to trash this note?");
    if($scope.confirmation  === true) {
      $scope.noteToBeDeleted = $scope.retrievedNotes[index]._id;
      notes.deleteNote($scope.noteToBeDeleted).success(function(result) {
      $scope.displayNotes();
      $scope.existingNoteField = false;
      alert("Note deleted");
    }).error(function(err) {
      console.log(err);
    });
    $scope.displayNotes();
    } 
  };

  $scope.editNote = function() {
    $scope.readonly = false;
  };
}]);