app.controller("HomeController", function($scope, $routeParams, $location, anchorSmoothScroll){
	$scope.categories = categories;
	$scope.nav = false;

	$scope.mobileNav = function(id){
    	$location.hash('bottom');
    	anchorSmoothScroll.scrollTo(id, 50);
    	$scope.nav = false;
    }

    $scope.toggleNav = function(){
    	if($scope.nav){
    		$scope.nav = false;
    		$("button.triggerNav").removeClass("ion-ios-close-empty").addClass("ion-navicon");
    	}
    	else {
    		$scope.nav = true;
    		$("button.triggerNav").removeClass("ion-navicon").addClass("ion-ios-close-empty");
    	}
    }
	
});