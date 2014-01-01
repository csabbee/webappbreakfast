'use strict';

angular.module('breakfastApp')
  .controller('CheckoutCtrl', function ($scope, basket, $firebase) {
    /*global Firebase */
    var firebaseref = new Firebase('https://csabivalyi.firebaseio.com/basket');
    var listItem = {};
    $scope.basket = basket;
    $scope.firebasket = $firebase(firebaseref);

    $scope.refresh = function() {
      console.log('refresh called');
      //getting every item from the basket
      angular.forEach($scope.basket.get(), function(data){
        listItem = {
          type: data.type,
          quantity: data.quantity
        };
        $scope.firebasket.$add(listItem);
        listItem = {};
      });
    };

  });
