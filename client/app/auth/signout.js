angular.module('shortly.signout', [])

.controller('SignoutController', function (Auth) {
  Auth.signout();
});

