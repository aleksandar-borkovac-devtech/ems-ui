'use strict';

angular.module('emsUiApp')
  .controller('UpdateEmployeeController', function ($scope, $http, $location, $routeParams) {

    $scope.initEmployee = function () {
      var id = $routeParams.id;
      $http
        .get('http://localhost:8080/api/employee/' + id)
        .success(function(response){
          $scope.employee = response;
        });
    };

    $scope.updateEmployee = function () {
      var id = $routeParams.id;
      $http
        .put('http://localhost:8080/api/employee/' + id, $scope.employee)
        .success(function(response){
          $location.path('/');
        });
    };
  });
