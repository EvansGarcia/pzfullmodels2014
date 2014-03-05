'use strict';

describe('Controller: HeylinrojasCtrl', function () {

  // load the controller's module
  beforeEach(module('pzfullmodelsApp'));

  var HeylinrojasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeylinrojasCtrl = $controller('HeylinrojasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
