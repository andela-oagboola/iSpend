var note = angular.module("note", []);
note.controller('noteCntrl', ['$scope', 'notes', 'getResource', function($scope, notes, getResource){
  $scope.user = getResource.loggedInUser();
  $scope.readonly = true;
  $scope.noNote = false;
  $scope.displayNotes = function() {
    notes.getNotes($scope.user._id).success(function(result) {
      if($scope.result === 0) {
        $scope.noNote = true;
      }
      $scope.retrievedNotes = result.reverse();
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
      $scope.noNote = false;
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
    // Materialize.toast('Note updated!', 3000, 'rounded');
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
    $scope.confirmation = confirm("Do you really want to trash \"" + $scope.retrievedNotes[index].title + "\" ?");
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