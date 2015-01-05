app.controller("mainController", function($scope, $location){
	$scope.viewLoading = false;

	$scope.$on('$routeChangeStart', function() {
	  $scope.viewLoading = true;
	});

	$scope.$on('$routeChangeSuccess', function() {
	  $scope.viewLoading = false;
	});

	$scope.changeView = function(route){
		$location.path(route);
	}
});