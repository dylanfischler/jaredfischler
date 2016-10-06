module.exports = function(db){
	return {
		all: function(){
			return new Promise((resolve, reject) => {
				db.query({ query: "SELECT * FROM category" }).then((result) => {
					resolve(result);
				}).catch((err) => {
					reject(err);
				})
			});
		}
	};

	


	// return [
	// 	{
	// 		title: "3D Modeling",
	// 		imgPath: "includes/categories/3DModel.JPG",
	// 		route: "3dmodeling"
	// 	},
	// 	{
	// 		title: "Animation",
	// 		imgPath: "includes/categories/Animation.JPG",
	// 		route: "animation"
	// 	},
	// 	{
	// 		title: "Cinematography",
	// 		imgPath: "includes/categories/Cinematography.JPG",
	// 		route: ""
	// 	},
	// 	{
	// 		title: "Digital Art",
	// 		imgPath: "includes/categories/Digital_Art.JPG",
	// 		route: ""
	// 	},
	// 	{
	// 		title: "Graphic Design",
	// 		imgPath: "includes/categories/Graphic_Design.png",
	// 		route: ""
	// 	},
	// 	{
	// 		title: "Sketches",
	// 		imgPath: "includes/categories/Sketches.jpg",
	// 		route: ""
	// 	},
	// ];
}

