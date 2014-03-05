'use strict';

describe('Controller: KristelgodinezCtrl', function () {

  // load the controller's module
  beforeEach(module('pzfullmodelsApp'));

  var KristelgodinezCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KristelgodinezCtrl = $controller('KristelgodinezCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
