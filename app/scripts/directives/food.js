'use strict';

angular.module('breakfastApp')
  .directive('food', function () {
    return {
      template:
      '<div>' +
      ' <h3>{{item.name}}</h3>' +
      ' {{item.price | currency}}' +
      '</div>',
      restrict: 'E',
      scope: {
        'item': '='
      }
    };
  });
