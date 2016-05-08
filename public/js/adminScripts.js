var app = angular.module("admin", ["ngRoute", "ui-notification"]);

app.config(function(NotificationProvider) {
    NotificationProvider.setOptions({
        delay: 10000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
    });
});

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider) {
		//root
		$routeProvider.when('/', {
			templateUrl: 'views/admin/main.html',
			controller: 'mainAdminController'
		});

		// //category routes
		// angular.forEach(categories, function(value, key){
		// 	$routeProvider.when("/"+value.route, {templateUrl: "views/category.html", controller: 'CategoryController', resolve: {
		// 		category: function(){ return value }
		// 	}});
		// });

		// //project views
		// $routeProvider.when('/project/:id', {
		// 	templateUrl: 'views/project.html',
		// 	controller: 'ProjectController'
		// });

		//fallback redirect
		$routeProvider.otherwise({ redirectTo: '/' })
	}
]);