'use strict';

describe('SignoutController', function () {
  var $scope, $rootScope, $httpBackend, createController, Auth;
  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('shortly'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    Auth = $injector.get('Auth');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    // used to create our AuthController for testing
    createController = function () {
      return $controller('SignoutController', {
        $scope: $scope,
        Auth: Auth
      });
    };

    createController();
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should call `Auth.signout()` when controller is loaded', function () {
    sinon.spy(Auth, 'signout');

    createController();

    expect(Auth.signout.called).to.equal(true);
    Auth.signout.restore();
  });

});
