'use strict';

angular.module('breakfastApp')
    .factory('basket', function() {


      var basket = {};
      var count = 0;

      return{
        get: function () {
          return basket;
        },
        add: function (item) {
          if (basket[item.id]) {
            basket[item.id].quantity += 1;
          } else {
            basket[item.id] = {
              type: item,
              quantity: 1
            };
          }
        },
        remove: function(item) {
          if(basket[item.id]){
            count -= basket[item.id].amount;
            delete basket[item.id];
          }
        },
        count: function() {
          return count;
        }
      };
    });
