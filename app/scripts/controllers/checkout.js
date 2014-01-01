'use strict';

angular.module('breakfastApp')
  .controller('CheckoutCtrl', function ($scope, basket, $firebase) {
    /*global Firebase*/
    //var listItem = {};
    //$scope.basket = basket;
    $scope.firebasket = $firebase(new Firebase('https://csabivalyi.firebaseio.com/basket'));

    $scope.firebasket.$bind($scope, 'basket').then(function(){
      $scope.refresh = function() {
        /*console.log('refresh called');
         console.dir($scope.firebasket);
         angular.forEach($scope.firebasket, function(data){
         console.log(data[0]);
         });*/
        //getting every item from the basket
        /*angular.forEach($scope.basket.get(), function(data){
         listItem = {
         type: data.type,
         quantity: data.quantity
         };
         $scope.firebasket.$add(listItem);
         listItem = {};
         });*/
      };
    });
  });
