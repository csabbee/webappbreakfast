'use strict';

angular.module('breakfastApp')
  .controller('CheckoutCtrl', function ($scope, basket) {
    $scope.basket = basket;
  });
