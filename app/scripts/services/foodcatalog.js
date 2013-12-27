'use strict';

angular.module('breakfastApp')
  .value('foodcatalog', [
    {
      id: 1,
      name: 'Mákos guba',
      price: 550,
      description: 'Dessert'
    },
    {
      id: 2,
      name: 'Velős pacal',
      price: 850,
      description: 'Main'
    },
    {
      id: 3,
      name: 'Grilled gorilla',
      price: 3760,
      description: 'Not recommended'
    }
  ]);
