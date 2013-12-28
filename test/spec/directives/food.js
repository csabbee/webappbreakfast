'use strict';

describe('Directive: food', function() {

  // load the directive's module
  beforeEach(module('breakfastApp'));

  var element;
  var scope;

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element(
        '<h3>{{first}}</h3>' +
        '{{second}}'
    );
    scope = $rootScope.$new();
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should bind the content', function() {
    // GIVEN: as in the setup
    // WHEN
    scope.$apply(function(){
      scope.first = 'testtext';
      scope.second = 123;
    });
    // THEN
    expect(element.html()).toBe('testtext');
    expect(element.text()).toBe('testtext123');
  });
});