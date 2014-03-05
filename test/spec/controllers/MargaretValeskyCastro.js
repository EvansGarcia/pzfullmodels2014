'use strict';

describe('Controller: MargaretvaleskycastroCtrl', function () {

  // load the controller's module
  beforeEach(module('pzfullmodelsApp'));

  var MargaretvaleskycastroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MargaretvaleskycastroCtrl = $controller('MargaretvaleskycastroCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
