app.controller("mainController", function($scope, $location, $anchorScroll){
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

    //anchorScroll fix from slugslog
    $scope.scrollTo = function(id) {
	    var oldLoc = $location.hash();
	    $location.hash(id);
	    $anchorScroll();
	    $location.hash(oldLoc);
	};

	$scope.goBack = function(){
		window.history.back();
	}

});