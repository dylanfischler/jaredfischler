app.controller("AnimationController", function($scope, $http){
	$scope.title = "Animation";

	var res = $http.get("/projects", { params: { category: "animation" } });
	res.success(function(data) { $scope.projects = data; });
    res.error(function(){ console.log("Project Retrieval Error"); });
});