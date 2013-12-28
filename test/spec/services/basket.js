'use strict';

describe('Service: Basket', function () {

  // load the service's module
  beforeEach(module('breakfastApp'));

  // instantiate service
  var Basket;
  var foodcatalog;

  beforeEach(inject(function (_basket_, _foodcatalog_) {
    Basket = _basket_;
    foodcatalog = _foodcatalog_;
  }));

  it('should have 3 items in the basket', function () {
    // GIVEN: as in the setup
    // WHEN: adding items to the basket
    foodcatalog.forEach(function(data){
      Basket.add(data);
    });
    // THEN
    expect(Basket.count()).toBe(3);
  });

  it('should have 0 item in the basket', function () {
    // GIVEN: adding items to the basket
    foodcatalog.forEach(function(data){
      Basket.add(data);
    });
    // WHEN: removing items from the basket
    foodcatalog.forEach(function(data){
      Basket.remove(data);
    });
    // THEN
    expect(Basket.count()).toBe(0);
  });

  it('should have 3 in the count variable', function(){
    // GIVEN: adding items to the basket
    foodcatalog.forEach(function(data){
      Basket.add(data);
    });
    // WHEN
    // THEN
    expect(Basket.count()).toBe(3);
  });
});
