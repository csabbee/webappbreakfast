'use strict';

angular.module('breakfastApp')
  .controller('NavCtrl', function ($scope, basket) {
    $scope.basket = basket;
  });
