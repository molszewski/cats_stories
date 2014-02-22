'use strict';

/* Controllers */

angular.module('catsApp.controllers', [])
    .controller('StoriesCtrl', ['$scope', '$http',
        function($scope, $http) {

            $http.get('data/stories.json').success(function(data) {
                $scope.stories = data;
            });

        }
    ]);
