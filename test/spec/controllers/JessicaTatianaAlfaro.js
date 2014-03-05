'use strict';

describe('Controller: JessicatatianaalfaroCtrl', function () {

  // load the controller's module
  beforeEach(module('pzfullmodelsApp'));

  var JessicatatianaalfaroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JessicatatianaalfaroCtrl = $controller('JessicatatianaalfaroCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
