angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $location) {
  $scope.data = {};
  $scope.location = window.location.origin;

  Links.getAll().then(function(linksArray) {
    $scope.data.links = linksArray;
  });
});

