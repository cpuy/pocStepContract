'use strict';

/**
 * @ngdoc function
 * @name jsonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsonApp
 */
angular.module('jsonApp')
  .controller('MainCtrl', function ($scope, $http) {

        $scope.lines = [{}, {}];

        $scope.submit = function() {
            $http.post('something/tobe/done', $scope.lines);
        }
  })
    .directive("fileread", [function () {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.fileread = loadEvent.target.result;
                        });
                    }
                    reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        }
    }]);
