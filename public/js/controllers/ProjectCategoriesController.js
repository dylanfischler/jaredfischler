app.controller("ProjectsCategoriesController", function($scope, $http){

	var categResponse = $http.get("/categories");
	categResponse.success(function(data, status, headers, config) {

		// app.config(['$routeProvider', '$locationProvider',
		// 	function($routeProvider) {
		// 		console.log("hello route provider");
		// 		//build routes dynamically
		// 		angular.forEach(data, function(){
		// 			console.log(this);
		// 			$routeProvider.when("/"+this.route, {templateUrl: "views/"+this.route+".html", controller: "CategoryController"});
		// 		});
		// 		//set default redirect
		// 		$routeProvider.otherwise({ redirectTo: '/' });
		// 	}
		// ]);
        // $scope.categories = data;
    });
    categResponse.error(function(data, status, headers, config) {
        console.log("Category Retrieval Failure");
    });

});