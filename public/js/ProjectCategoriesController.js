console.log("hello");
app.controller("ProjectsCategoriesController", function($scope, $http){

	var categResponse = $http.get("/categories");
	categResponse.success(function(data, status, headers, config){

		app.config(['$routeProvider', '$locationProvider',
			function($routeProvider){
				//build routes dynamically
				angular.forEach(data, function(){
					console.log(this);
					$routeProvider.when("/"+this.route, {templateUrl: "views/"+this.route+".html", controller: "CategoryController"});
				});
			}
		]);

        // $scope.categories = data;
    });
    categResponse.error(function(){
        console.log("Category Retrieval Failure");
    });

});