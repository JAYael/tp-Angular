describe('test de commandeCtrl',function(){
	
	var url ='https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
	var list = [
		{
			"_id": {
				"$oid": "51619d74e4b08b993350c39b"
			},
			"ISBN-10": "193398869X",
	      "ISBN-13": "971-90",
	      "title": "toto",
	      "publisher": "Manning",
	      "author": "John Resig, Bear Bibeault",
	      "rating": 3,
	      "price": 2.31,
	      "desc": "<p><i>Secrets of the Javascript Ninja</i> takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up.</p>",
	      "pages": 300,
	      "img": "http://ecx.images-amazon.com/images/I/51OAaPTWgdL._SL160_PIsitb-sticker-arrow-dp,TopRight,12,-18_SH30_OU01_AA160_.jpg"
		},
		{
	      "_id": {
	        "$oid": "51619ae1e4b08b993350c397"
	      },
	      "ISBN-10": "1449344852",
	      "ISBN-13": "974-12",
	      "title": "tata",
	      "publisher": "O'Reilly",
	      "author": "Brad Green, Shyam Seshadri",
	      "rating": 5,
	      "price": 1.83,
	      "desc": "<p>Develop smaller, lighter web apps that are simple to create and easy to test, extend, and maintain as they grow. This hands-on guide introduces you to AngularJS, the open source JavaScript framework that uses Model–view–controller (MVC) architecture, data binding, client-side templates, and dependency injection to create a much-needed structure for building web apps.</p><p>Guided by two engineers who worked on AngularJS at Google, you’ll walk through the framework’s key features, and then build a working AngularJS app—from layout to testing, compiling, and debugging. You’ll learn how AngularJS helps reduce the complexity of your web app.</p>",
	      "pages": 180,
	      "img": "http://ecx.images-amazon.com/images/I/51wVt-X5EnL._AA160_.jpg"
		}
		];
	var ctrl,
		scope,
		$httpBackend;
	
	beforeEach(module('myApp'));
	
	
	beforeEach(inject(function(_$httpBackend_,$rootScope,$controller){
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET(url).respond(list);
		scope = $rootScope.$new();
		ctrl = $controller('commandeCtrl', {$scope:scope});
	}));
	
	it('doit initialiser le flaf de status', function($httpBackend) {
		expect($scope.catalog).toEqual([]);
		$httpBackend.flush();
		expect($scope.servicePret).toEqual(list);
	});
		
    afterEach(function(){
    	$httpBackend.verifyNoOutstandingExpectation();
    	$httpBackend.verifyNoOutstandingRequest();
    });
});