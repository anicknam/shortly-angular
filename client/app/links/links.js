angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  Links.getAll().then(function(linksArray) {
    $scope.data.links = linksArray;
  });
});
