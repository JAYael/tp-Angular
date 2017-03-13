(function(){
	'use strict';
	angular
            .module('myApp.commande',['ngRoute'])
            .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	  
        $routeProvider.when('/commande', {
            templateUrl: './view-commande/commande.html', controller: 'view-commandeCtrl'
            });
        }]);
})();