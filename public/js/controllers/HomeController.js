app.controller("HomeController", function($scope, $routeParams, $location, $http, anchorSmoothScroll, $sce){
	$scope.categories = categories;
	$scope.nav = false;

    $http.get("/personal_details").then(function(res){
        $scope.userData = res.data;
        $scope.video_embed = $sce.trustAsHtml(res.data.video_reel);
    }, function(err){
        console.error(err);
    });

	$scope.mobileNav = function(id){
    	$location.hash('bottom');
    	anchorSmoothScroll.scrollTo(id, 50);
    	$scope.nav = false;
    	$("button.triggerNav").removeClass("ion-ios-close-empty").addClass("ion-navicon");
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