'use strict';

angular.module('myApp.form', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	  
        $routeProvider.when('/form', {
            templateUrl: './form/form.html', controller: 'DynFormCtrl'
        });
    }]).controller('DynFormCtrl', function ($scope, $http) {

        var urlDesc = 'https://api.mongolab.com/api/1/databases/forms/collections/forms/51669d15e4b04a20de65fc58?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
        var urlSave = 'https://api.mongolab.com/api/1/databases/forms/collections/data?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

        $scope.form = undefined;
        $scope.formId = undefined;
        $http.get(urlDesc).then(function(response){
            $scope.form = response.data;
        });
    });

