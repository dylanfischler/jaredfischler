app.controller("ProjectController", ['$scope', '$http', '$routeParams', '$sce', 
	function($scope, $http, $routeParams, $sce){
		//get project id from request
		$scope.projectID = $routeParams.id;

		var res = $http.get("/projects", {
			params: {id: $scope.projectID}
		});
		res.success(function(data, status, headers, config) {
			console.log(data);
			$scope.project = data;
			$scope.project.html = $sce.trustAsHtml($scope.project.html);
	    });
	    res.error(function(data, status, headers, config) {
	        console.log("Project Retrieval Failure");
	    });
	}]
);