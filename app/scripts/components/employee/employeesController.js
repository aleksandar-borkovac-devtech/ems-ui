'use strict';

angular.module('emsUiApp')
  .controller('EmployeesController', function ($scope, $http) {
    $scope.getAllEmployees = function () {
      $http
        .get('http://localhost:8080/api/employee')
        .success(function(data) {
          console.log(data);
          $scope.allEmployees = data;
        })
        .error(function(data) {
          alert('Something went wrong!');
          console.log(data);
        });
    };
  });
