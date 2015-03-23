var userCntrl = angular.module("userCntrl", []);
userCntrl.controller('userDetails', ['User', function(){
  getUser.getUserDetails().success(function(data) {});
}]);