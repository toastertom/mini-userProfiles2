angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
    mainService.getUsers().then(function(response){
      
    })
  }


  $scope.getUsers();

});
