angular.module('myApp', [])
  .controller('commandeCtrl', function($scope,$http) {
   	$scope.lignes = [];
   	$scope.lignes.push({
   		ref : 'X',
   		libelle : 'libellé X',
   		qte : 0,
   		pu : 10
   	});   	
   	$scope.lignes.push({
   		ref : 'Y',
   		libelle : 'libellé Y',
   		qte : 0,
   		pu : 12
   	});
   	$scope.getHT = function(item){
   		return item.pu*item.qte;
   	}
   	$scope.getTTC = function(item){
   		return $scope.getHT(item)*1.2;
   	}
   	$scope.getTotalHT = function(){
   		var somme = 0;
   		for (var index in $scope.lignes){
   			somme+= $scope.getHT($scope.lignes[index]);
   		}
   		return somme;
   	}
   	$scope.getTotalTTC = function(){
   		var somme = 0;
   		for (var index in $scope.lignes){
   			somme+= $scope.getTTC($scope.lignes[index]);
   		}
   		return somme;
   	}
   	
   	$scope.isGrosMontant =function(item){
   		return $scope.getTTC(item)>=1000;
   	}
   	$scope.addLigne = function(item){
   		$scope.lignes.push(item);
   		$scope.ligneToAdd=undefined;
   	}
   	$scope.addLigne2 = function(item){
   		var toAddCatalog = {
   				ref:item.elt['ISBN-13'],
   				libelle: item.elt.title,
   				pu:item.elt.price,
   				qte:item.qte
   		}
   		$scope.lignes.push(toAddCatalog);
   		$scope.ligneToAdd=undefined;
   	}
   	$scope.supLigne = function(item){
   		for(var index in $scope.lignes){
   			if(item.ref === $scope.lignes[index].ref){
   				$scope.lignes.splice(index,1);
   				return;
   			}
   		}
   	}
   	$scope.catalog = [];
   	var url='https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
   	$http.get(url).then(function(response){
   		$scope.catalog=response.data;
   	});
});