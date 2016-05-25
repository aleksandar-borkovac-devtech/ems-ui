'use strict';

angular.module('emsUiApp')
  .controller('AddEmployeeController', function ($scope, $http, $location) {

    $scope.addEmployee = function () {
      $http
        .post('http://localhost:8080/api/employee', $scope.employee)
        .success(function(response){
          $location.path('/');
        });
    }
  });
