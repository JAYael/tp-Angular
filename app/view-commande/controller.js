(function(){
	'use strict';
	angular
            .module('myApp.commande')
            .controller('view-commandeCtrl', function($scope,panierService) {	
                $scope.commande = panierService.getPanier();
            });
})();