var note = angular.module("note", []);
note.controller('noteCntrl', ['$scope', 'notes', '$rootScope', function($scope, notes, $rootScope){
  $scope.user = $rootScope.user;

  notes.getNotes($scope.user._id).success(function(result) {
    $scope.retrievedNotes = result;
    console.log(result);
  });
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
    console.log($scope.note);
    notes.createNote($scope.note).success(function(result) {
      console.log(result);
    }).error(function(err) {
      console.log(err);
    });
  };
  $scope.updateNote = function() {
    $scope.existingNoteField = false;
    $scope.newNoteField = true;
    $scope.note = {
      title: $scope.existingTitle,
      content: $scope.existingNote
    };
    notes.updateNote($scope.note, $scope.user._id).success(function(res) {
      console.log(res);
    }).error(function(err) {
      console.log(err);
    });
  };
  $scope.viewNote = function(index) {
    $scope.selectedNote = $scope.retrievedNotes[index];
    $scope.existingTitle = $scope.selectedNote.title;
    $scope.existingNote = $scope.selectedNote.content;
    $scope.existingNoteField = true;
    $scope.newNoteField = false;
  };
}]);