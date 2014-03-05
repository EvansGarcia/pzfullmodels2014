'use strict';

describe('Controller: DayanafonsecaCtrl', function () {

  // load the controller's module
  beforeEach(module('pzfullmodelsApp'));

  var DayanafonsecaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DayanafonsecaCtrl = $controller('DayanafonsecaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
