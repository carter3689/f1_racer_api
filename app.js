(function() {
  'use strict';

  var app = angular.module('f1', []);

  app.controller('MainCtrl', function($scope, $http) {
    $http.get('https://ergast.com/api/f1/2017/5/driverStandings.json').then(function(response) {
      $scope.information = response.data;

      $scope.column = '';
    });
  });
}());
