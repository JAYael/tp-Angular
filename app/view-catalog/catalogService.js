(function(){
    'use strict';
    angular
        .module('myApp.catalog')
        .service('catalogService',function($http){
        var self = this;
        var url='https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';            
        var promise = $http.get(url).then(function(response){
   		return response.data;
            });

        this.getList = function(){
            return promise;
        };	
        this.getBook = function(id){
            return promise.then(function(liste){
                for(var index in liste){
                    if(liste[index]._id.$oid===id){
                        return liste[index];
                    }
                }
                        throw 'livre non trouvé';
            });
        };	
    });
})();