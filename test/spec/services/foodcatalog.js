'use strict';

describe('Service: foodcatalog', function () {

  // load the service's module
  beforeEach(module('breakfastApp'));

  // instantiate service
  var foodcatalog;
  beforeEach(inject(function (_foodcatalog_) {
    foodcatalog = _foodcatalog_;
  }));

  it('should do something', function () {
    expect(!!foodcatalog).toBe(true);
  });

});
