'use strict';

angular.module('breakfastApp')
    .factory('basket', function() {

      var basket = {};
      var count = 0;
      var total = 0;

      return {
        get: function () {
          return basket;
        },
        add: function (item) {
          console.log(count);
          if (basket[item.id]) {
            basket[item.id].quantity += 1;
          } else {
            basket[item.id] = {
              type: item,
              quantity: 1
            };
          }
          total += item.price;
          count += 1;
        },
        remove: function(item) {
          count -= basket[item.id].quantity;
          total -= basket[item.id].quantity * item.price;
          delete basket[item.id];
        },
        count: function() {
          return count;
        },
        total: function() {
          return total;
        },
        decrement: function(item) {
          if(basket[item.id].quantity === 1){
            this.remove(item);
          } else {
            count -= 1;
            total -= item.price;
            basket[item.id].quantity -= 1;
          }
        },
        increment: function(item) {
          count += 1;
          basket[item.id].quantity += 1;
          total += item.price;
        }
      };
    });
