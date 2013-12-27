'use strict';

describe('Service: Basket', function () {

  // load the service's module
  beforeEach(module('breakfastApp'));

  // instantiate service
  var Basket;
  beforeEach(inject(function (_Basket_) {
    Basket = _Basket_;
  }));

  it('should do something', function () {
    expect(!!Basket).toBe(true);
  });

});
