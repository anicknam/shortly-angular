'use strict';

describe('Routing', function () {
  var $route, $rootScope, $location, $httpBackend;
  beforeEach(module('shortly'));

  beforeEach(inject(function ($injector) {
    $route = $injector.get('$route');
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    $location = $injector.get('$location');
  }));

  // afterEach(function () {
  // });

  it('Should have /signup route, template, and controller', function () {
    expect($route.routes['/signup']).to.be.defined;
    expect($route.routes['/signup'].controller).to.equal('AuthController');
    expect($route.routes['/signup'].templateUrl).to.equal('app/auth/signup.html');
  });

  it('Should have /signin route, template, and controller', function () {
    expect($route.routes['/signin']).to.be.defined;
    expect($route.routes['/signin'].controller).to.equal('AuthController');
    expect($route.routes['/signin'].templateUrl).to.equal('app/auth/signin.html');
  });

  it('Should have /links route, template, and controller', function () {
    expect($route.routes['/links']).to.be.defined;
    expect($route.routes['/links'].controller).to.equal('LinksController');
    expect($route.routes['/links'].templateUrl).to.equal('app/links/links.html');
  });

  it('Should have /shorten route, template, and controller', function () {
    expect($route.routes['/shorten']).to.be.defined;
    expect($route.routes['/shorten'].controller).to.equal('ShortenController');
    expect($route.routes['/shorten'].templateUrl).to.equal('app/shorten/shorten.html');
  });

  it('Should have authenticate on /shorten and /links', function () {
    expect($route.routes['/shorten'].authenticate).to.equal(true);
    expect($route.routes['/links'].authenticate).to.equal(true);
  });

  it('Should redirect to /links on unknown routes', function () {
    inject(function($httpBackend) {
      $httpBackend.expectGET('app/auth/signin.html')
      .respond(200);
    });

    $location.path('signin');
    $rootScope.$digest();
    expect($route.current.controller).to.equal('AuthController');
  });

});
