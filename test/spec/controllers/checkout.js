'use strict';

describe('Controller: CheckoutCtrl', function () {

  // load the controller's module
  beforeEach(module('breakfastApp'));

  var CheckoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CheckoutCtrl = $controller('CheckoutCtrl', {
      $scope: scope
    });
  }));

  it('should return zero since there is no item in the basket to begin with', function () {
    expect(scope.basket.count()).toBe(0);
  });
});
