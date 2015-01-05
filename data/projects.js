var projects = require('../data/projects_json')();

module.exports = {
	projectsByCategory: function(reqCat){
		return projects.filter(function(el){
			return (el.category === reqCat);
		});
	},

	getProject: function(category, id){
		return projects.filter(function(el){
			return ((el.category == category) && (el.id == id));
		});
	}

}

