'use strict';

/**
 * @ngdoc overview
 * @name emsUiApp
 * @description
 * # emsUiApp
 *
 * Main module of the application.
 */
angular
  .module('emsUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/components/customer/customerView.html',
        controller: 'CustomerController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
