app.controller("SketchesController", function($scope, $http){
	$scope.title = "Sketches";

	var res = $http.get("/projects", { params: { category: "sketches" } });
	res.success(function(data) { $scope.projects = data; });
    res.error(function(){ console.log("Project Retrieval Error"); });
});