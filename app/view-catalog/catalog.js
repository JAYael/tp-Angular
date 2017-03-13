angular.module('myApp.catalog', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	  
	  $routeProvider.when('/catalog', {
	  templateUrl: './view-catalog/catalog.html', controller: 'view-catalogCtrl'
	  });
      }])
    .controller('view-catalogCtrl', function($scope,$http,$rootScope, catalogService, panierService) {
	  
   	$scope.catalog = [];
   	$rootScope.title = 'catalogue';
        $scope.Message = undefined;
        catalogService.getList().then(function(catalog){
                $scope.catalog = catalog;
        });
  	$scope.book = [];
	$scope.getImgBookUrl=function(item){		
		var url=item.img;
		$http.get(url).then(function(response){
			$scope.book=response.data;
		});
	} ;
	$scope.ajoute = function(article){
		panierService.add(article,1);
	};
}).filter('interval',function(){
	return function(input,min,max){
		if(angular.isArray(input)){			
			return input.filter(function(livre){
				return min === undefined 
				|| min === null 
				|| livre.price>min;
			}).filter(function(livre){
				return max === undefined 
				|| max === null 
				|| livre.price<max;
			});
		}else {
			return input;			
		}
//		for(i=0;i<input.length;i++){
//			if(input[i].price>min&&input[i].price<max){
//				output.push(input[i]);
//			}
//		}
	};
});