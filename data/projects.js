module.exports = function(db){
	return {
		projectsByCategory: function(reqCat){
			return new Promise((resolve, reject) => {
				db.collection('projects').find({category: reqCat}).toArray((err, projects) => {
					if(err) reject(err);
					else resolve(projects);
				});
			});
		},

		getProject: function(id){
			return new Promise((resolve, reject) => {
				db.collection('projects').findOne({id}, (err, project) => {
					if(err) reject(err);
					else resolve(project);
				});
			});
		},

		allProjects: function(){
			return new Promise((resolve, reject) => {
				db.collection('projects').find({}).toArray((err, projects) => {
					if(err) reject(err);
					else resolve(projects);
				});
			});
		}
	}
};

