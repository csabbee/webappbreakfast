'use strict';

angular.module('breakfastApp')
  .controller('MainCtrl', function ($scope, foodcatalog, basket) {
    $scope.foodcatalog = foodcatalog;
    $scope.basket = basket;
  });
