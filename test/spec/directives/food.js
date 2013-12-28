'use strict';

describe('Directive: food', function() {

  // load the directive's module
  beforeEach(module('breakfastApp'));

  var element;
  var scope;

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element(
      '<div id="test">' +
        '<h3>{{first}}</h3>' +
        '{{second}}' +
      '</div>'
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
    expect(element.html()).toBe('<h3 class="ng-binding">testtext</h3>123');
    expect(element.text()).toBe('testtext123');
  });
});