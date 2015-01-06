app.controller("HomeController", function($scope, $routeParams, $location, anchorSmoothScroll){
	$scope.categories = categories;
	$scope.nav = false;

	$scope.mobileNav = function(id){
    	$location.hash('bottom');
    	anchorSmoothScroll.scrollTo(id, 50);
    	$scope.nav = false;
    }
	
});