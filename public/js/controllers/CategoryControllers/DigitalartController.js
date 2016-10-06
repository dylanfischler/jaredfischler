app.controller("DigitalartController", function($scope, $http){
	$scope.title = "Digital Art";

	var res = $http.get("/projects", { params: { category: "digitalart" } });
	res.success(function(data) { $scope.projects = data; });
    res.error(function(){ console.log("Project Retrieval Error"); });
});