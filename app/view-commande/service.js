angular.module('myApp.commande')
.value('TVAService',1.12)
.service('panierService',function($rootScope,TVAService){
	var panier = [];
	var self = this;
	
	this.add = function(item,qte){
		panier.push({
			item : item,
			qte : qte
		})
	}
	
	this.getPanier= function(){
		return panier;
	}
	
	this.getHT=function(ligne){
		return ligne.article.price * ligne.qte;
	}
	this.getTTC = function(ligne){
		return this.getHT(ligne)*TVAService;
	}
	this.getTotalHT = function(){
		return panier.reduce(function(previous,item){
   			return previous + item.qte;
   		});
   	}
	this.getTotalTTC = function(){
   		return self.getTotalHT * TVAService;
   	}
	$rootScope.getPanierServiceSize = function(){
		return panier.reduce(function(previous,item){
			return previous + item.qte;
		},0);
	}
	return this;
});