angular.module('myApp.book', ['ngRoute','ngSanitize'])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	  
	  $routeProvider.when('/book/:bookId', {
	  templateUrl: './view-book/book.html',
	  controller: 'view-bookCtrl'
	  })}])
  .controller('view-bookCtrl', function($scope,catalogService,$routeParams,$sanitize,$rootScope) {
            $rootScope.title = 'book';
            $scope.book = undefined;
            $scope.Message = undefined;
            catalogService.getBook($routeParams.bookId).then(function(book){
                $scope.book = book;
                $scope.Message = $scope.book.desc;
            });
});