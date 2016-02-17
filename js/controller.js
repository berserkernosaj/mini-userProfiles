myApp.controller("MainController", function($scope, bestService){

    $scope.getUsers = function() {
     $scope.users = bestService.getUsers();
  }
  $scope.getUsers();



});
