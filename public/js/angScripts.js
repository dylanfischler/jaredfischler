var app = angular.module("jayrad", ["ngRoute", "ngTouch", "ngAnimate"]);

app.filter("trust", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);

app.filter('keyIs', function() {
  return function(items, key, val) {
        var filtered = [];
        for(var i in items) {
        	if(items[i][key] === val) {
        		filtered.push(items[i]);
        	}
        }

        return filtered;
    };
});

// data 
// var categories = [
// 	{
// 		title: "3D Modeling",
// 		imgPath: "includes/categories/3DModel.JPG",
// 		route: "3dmodeling",
// 		controller: "CategoryController"
// 	},
// 	{
// 		title: "Animation",
// 		imgPath: "includes/categories/Animation.JPG",
// 		route: "animation",
// 		controller: "CategoryController"
// 	},
// 	{
// 		title: "Cinematography",
// 		imgPath: "includes/categories/Cinematography.JPG",
// 		route: "cinematography",
// 		controller: "CategoryController"
// 	},
// 	{
// 		title: "Digital Art",
// 		imgPath: "includes/categories/Digital_Art.JPG",
// 		route: "digitalart",
// 		controller: "CategoryController"
// 	},
// 	{
// 		title: "Graphic Design",
// 		imgPath: "includes/categories/Graphic_Design.png",
// 		route: "graphicdesign",
// 		controller: "CategoryController"
// 	},
// 	{
// 		title: "Sketches",
// 		imgPath: "includes/categories/Sketches.jpg",
// 		route: "sketches",
// 		controller: "CategoryController"
// 	},
// ];


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
			$routeProvider.when("/"+value.category_id, {templateUrl: "views/category.html", controller: 'CategoryController', resolve: {
				category: function(){ return value }
			}});
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