'use strict';

angular.module('breakfastApp')
    .service('Basket', function Basket() {


      var basket = {};

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
          delete basket[item.id];
        }
      };
    });
