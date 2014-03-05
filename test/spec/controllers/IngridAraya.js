'use strict';

describe('Controller: IngridarayaCtrl', function () {

  // load the controller's module
  beforeEach(module('pzfullmodelsApp'));

  var IngridarayaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IngridarayaCtrl = $controller('IngridarayaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
