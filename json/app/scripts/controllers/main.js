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

        $scope.expense = {};
        $scope.expense.lines = [{}];

        $scope.submit = function() {
            $http.post('/bonita/rest/tasks/poc/json', $scope.expense);
        }

        $scope.add = function() {
            $scope.expense.lines.push({});
        }

        $scope.remove = function() {
            if ($scope.canRemove()) {
                $scope.expense.lines.pop();
            }
        }

        $scope.canRemove = function() {
            return $scope.expense.lines.length > 1;
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
