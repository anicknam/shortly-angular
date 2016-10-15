angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $location) {
  $scope.data = {};
  $scope.location = window.location.origin;
  if (!Auth.isAuth()) {
    return $location.path('/signin');
  }

  Links.getAll().then(function(linksArray) {
    $scope.data.links = linksArray;
  });
});

