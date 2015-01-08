app.controller("ProjectController", ['$scope', '$http', '$routeParams', '$sce', 
	function($scope, $http, $routeParams, $sce){
		//get project id from request
		$scope.projectID = $routeParams.id;

		var res = $http.get("/projects", {
			params: {id: $scope.projectID}
		});
		res.success(function(data, status, headers, config) {
			$scope.project = data;

			//verify html embed 
			$scope.project.html = $sce.trustAsHtml($scope.project.html);
			if($scope.project.addHtml){
				for(var i = 0; i < $scope.project.addHtml.length; i++){
					$scope.project.addHtml[i] = $sce.trustAsHtml($scope.project.addHtml[i]);
				}
			}
			
	    });
	    res.error(function(data, status, headers, config) {
	        console.log("Project Retrieval Failure");
	    });
	}]
);