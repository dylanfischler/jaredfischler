var app = angular.module("jayrad", ["ngRoute"]);

// data 
var categories = [
	{
		title: "3D Modeling",
		imgPath: "includes/categories/3DModel.JPG",
		route: "3dmodeling",
		controller: "3dmodelingController"
	},
	{
		title: "Animation",
		imgPath: "includes/categories/Animation.JPG",
		route: "animation",
		controller: "AnimationController"
	},
	{
		title: "Cinematography",
		imgPath: "includes/categories/Cinematography.JPG",
		route: "cinematography",
		controller: "CinematographyController"
	},
	{
		title: "Digital Art",
		imgPath: "includes/categories/Digital_Art.JPG",
		route: "digitalart",
		controller: "DigitalartController"
	},
	{
		title: "Graphic Design",
		imgPath: "includes/categories/Graphic_Design.png",
		route: "graphicdesign",
		controller: "GraphicdesignController"
	},
	{
		title: "Sketches",
		imgPath: "includes/categories/Sketches.jpg",
		route: "sketches",
		controller: "SketchesController"
	},
];

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider) {
		//root
		$routeProvider.when('/', { 
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		});

		angular.forEach(categories, function(value, key){
			$routeProvider.when("/"+value.route, {templateUrl: "views/category.html", controller: value.controller});
		});

		$routeProvider.otherwise({ redirectTo: '/' })
	}
]);

app.controller("HomeController", function($scope){
	$scope.categories = categories;
});

app.controller("CategoryController", function($scope){
	
});