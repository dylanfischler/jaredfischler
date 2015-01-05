app.controller("ProjectController", ['$scope', '$http', '$routeParams', 
	function($scope, $http, $routeParams){
		//get project id from request
		$scope.projectID = $routeParams.id;
	}]
);