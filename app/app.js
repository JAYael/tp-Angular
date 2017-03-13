'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.catalog',
  'myApp.book',
  'myApp.commande'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/catalog'});
}]);
