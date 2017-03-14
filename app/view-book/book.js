angular.module('myApp.book', ['ngRoute','ngSanitize'])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	  
	  $routeProvider.when('/book/:bookId', {
	  templateUrl: './view-book/book.html',
	  controller: 'view-bookCtrl'
	  });
      }])
  .controller('view-bookCtrl', function($scope,catalogService,$routeParams,$sanitize,$rootScope) {
            $rootScope.title = 'book';
            $scope.book = undefined;
            $scope.Message = undefined;
            catalogService.getBook($routeParams.bookId).then(function(book){
                $scope.book = book;
                $scope.Message = $scope.book.desc;
            });
}).directive('rating',function(){
    return {
    restrict: 'A',  
    scope: false,
    link:function(scope,element,attrs){
        scope.$watch(attrs.rating,function(value){
            for(var i = 0;i<value;i++){
                var img = angular.element('<img>')
                        .attr('src','data:image/jpeg;base64,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')
                        .css('max-width','30px');
                element.append(img);
            }
        });
    }
  };
});