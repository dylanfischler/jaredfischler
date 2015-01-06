var app = angular.module("jayrad", ["ngRoute", "ngTouch", "ngAnimate"]);

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


//route setup
app.config(['$routeProvider', '$locationProvider',
	function($routeProvider) {
		//root
		$routeProvider.when('/', { 
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		});

		//category routes
		angular.forEach(categories, function(value, key){
			$routeProvider.when("/"+value.route, {templateUrl: "views/category.html", controller: value.controller});
		});

		//project views
		$routeProvider.when('/project/:id', {
			templateUrl: 'views/project.html',
			controller: 'ProjectController'
		});

		//fallback redirect
		$routeProvider.otherwise({ redirectTo: '/' })
	}
]);