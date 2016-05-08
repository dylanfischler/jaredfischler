app.controller("adminController", function($scope){
    
});

app.controller("mainAdminController", function($scope, $http, Notification){
    $http.get("/personal_details").then(function(res){
    	$scope.userData = res.data;
    }, function(err){
    	console.error(err);
    });

    $scope.update = function(){
    	$http.post("/personal_details", { user: $scope.userData }).then(function(res){
			if(res.data.value) {
				$scope.userData = res.data.value;
				Notification.primary('Updated');
			}
		}, function(err){
			console.error(err);
			Notification.error("Error" + JSON.stringify(err));
		});
    };
});