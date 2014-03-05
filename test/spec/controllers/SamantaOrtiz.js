'use strict';

describe('Controller: SamantaortizCtrl', function () {

  // load the controller's module
  beforeEach(module('pzfullmodelsApp'));

  var SamantaortizCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SamantaortizCtrl = $controller('SamantaortizCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
