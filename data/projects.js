var projects = require('../data/projects_json')();

module.exports = {
	projectsByCategory: function(reqCat){
		return projects.filter(function(el){
			return (el.category === reqCat);
		});
	},

	getProject: function(id){
		var filtered = projects.filter(function(el){
			return (el.id == id);
		});

		return filtered[0];
	},

	allProjects: function(){
		return projects;
	}

}

