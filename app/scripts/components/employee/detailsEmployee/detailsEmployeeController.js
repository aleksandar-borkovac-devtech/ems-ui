'use strict';

angular.module('emsUiApp')
  .controller('DetailsEmployeeController', function ($scope, $http, $routeParams) {

    $scope.getEmployee = function () {
      var id = $routeParams.id;
      $http
        .get('http://localhost:8080/api/employee/' + id)
        .success(function(response){
          $scope.employee = response;
        });
    }
  });
