'use strict';

angular.module('breakfastApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'ngAnimate-animate.css',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
