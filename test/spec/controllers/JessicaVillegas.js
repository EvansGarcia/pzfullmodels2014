'use strict';

describe('Controller: JessicavillegasCtrl', function () {

  // load the controller's module
  beforeEach(module('pzfullmodelsApp'));

  var JessicavillegasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JessicavillegasCtrl = $controller('JessicavillegasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
