app.controller("ProjectController", ['$scope', '$http', '$routeParams', 
	function($scope, $http, $routeParams){
		//get project id from request
		$scope.projectID = $routeParams.id;

		var res = $http.get("/projects", {
			params: {id: $scope.projectID}
		});
		res.success(function(data, status, headers, config) {
			console.log(data);
			$scope.project = data;
	    });
	    res.error(function(data, status, headers, config) {
	        console.log("Project Retrieval Failure");
	    });
	}]
);