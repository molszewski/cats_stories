'use strict';

// Declare app level module which depends on filters, and services
angular.module('catsApp', [
  'ngRoute',
  'catsApp.filters',
  'catsApp.services',
  'catsApp.directives',
  'catsApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stories', {templateUrl: 'partials/stories.html', controller: 'StoriesCtrl'});
  $routeProvider.otherwise({redirectTo: '/stories'});
}]);
