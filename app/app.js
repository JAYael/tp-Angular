'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.catalog',
  'myApp.book',
  'myApp.commande',
  'myApp.form'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/catalog'});
}]);
