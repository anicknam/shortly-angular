'use strict';

describe('Routing', function () {
  var $route, $http;
  beforeEach(module('shortly'));

  beforeEach(inject(function ($injector) {
    $route = $injector.get('$route');
    $http = $injector.get('$http');
  }));

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

  it('Should redirect to /links on unknown routes', function (done) {
    $http({
      method: 'GET',
      url: 'http://127.0.0.1:8000/#/yodawg'
    }).then(function(resp) {
      console.log('yo dawg!!!!!~~~~~~~', resp);
      // done();
    });

    // done();
  });

});
