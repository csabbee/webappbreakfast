'use strict';

angular.module('breakfastApp')
  .directive('food', function () {
    return {
      template:
      ' <b>{{item.name}}</b>' +
      ' {{item.price | currency}}',
      restrict: 'E',
      scope: {
        'item': '='
      }
    };
  });
