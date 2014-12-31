angular.module("jayrad", [])

.controller("ProjectsCategories", function($scope){
	$scope.categories = [
		{
			title: "3D Modeling",
			imgPath: "includes/categories/3DModel.JPG"
		},
		{
			title: "Animation",
			imgPath: "includes/categories/Animation.JPG"
		},
		{
			title: "Cinematography",
			imgPath: "includes/categories/Cinematography.JPG"
		},
		{
			title: "Digital Art",
			imgPath: "includes/categories/Digital_Art.JPG"
		},
		{
			title: "Graphic Design",
			imgPath: "includes/categories/Graphic_Design.png"
		},
		{
			title: "Sketches",
			imgPath: "includes/categories/Sketches.JPG"
		},

	]
})

.directive('bgImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('bgImg', function(imgPath) {
            element.css({ 'background-image': 'url('+imgPath+')' });
        });
    };
})