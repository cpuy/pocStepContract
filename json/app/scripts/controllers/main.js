'use strict';

/**
 * @ngdoc function
 * @name jsonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsonApp
 */
angular.module('jsonApp')
  .controller('MainCtrl', function ($scope) {

        $scope.submit = function() {
            alert('ca marche');
        }
  });
