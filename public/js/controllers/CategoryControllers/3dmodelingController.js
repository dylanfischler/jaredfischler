app.controller("3dmodelingController", function($scope, $http){
	$scope.title = "3D Modeling";
	
	var res = $http.get("/projects", { params: { category: "3dmodeling" } });
	res.success(function(data) { $scope.projects = data; });
    res.error(function(){ console.log("Project Retrieval Error"); });

});