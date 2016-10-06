app.controller("GraphicdesignController", function($scope, $http){
	$scope.title = "Graphic Design";

	var res = $http.get("/projects", { params: { category: "graphicdesign" } });
	res.success(function(data) { $scope.projects = data; });
    res.error(function(){ console.log("Project Retrieval Error"); });
});