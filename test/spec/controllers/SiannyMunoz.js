'use strict';

describe('Controller: SiannymunozCtrl', function () {

  // load the controller's module
  beforeEach(module('pzfullmodelsApp'));

  var SiannymunozCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SiannymunozCtrl = $controller('SiannymunozCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
