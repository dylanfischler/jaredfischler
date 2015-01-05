app.controller("CinematographyController", function($scope, $http){
	$scope.title = "Cinematography";

	var res = $http.get("/projects", { params: { category: "cinematography" } });
	res.success(function(data) { $scope.projects = data; });
    res.error(function(){ console.log("Project Retrieval Error"); });

});