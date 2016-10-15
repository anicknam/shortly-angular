angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = { url: '' };

  $scope.addLink = function() {
    Links.addOne($scope.link);
  };
});
