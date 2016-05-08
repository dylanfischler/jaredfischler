app.controller("CategoryController", function($scope, category, $http){
	
	$scope.title = category.title;
	
	var res = $http.get("/projects", { params: { category: category.route } });
	res.success(function(data) { $scope.projects = data; });
    res.error(function(){ console.log("Project Retrieval Error"); });

});