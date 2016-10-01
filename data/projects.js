module.exports = function(db){
	return {
		projectsByCategory: function(reqCat){
			return new Promise((resolve, reject) => {
				let query = "SELECT * FROM project WHERE cat_id=?";
				let vals = [reqCat];
				db.query({ query, vals }).then((result) => {
					resolve(result);
				}).catch((err) => {
					reject(err);
				});
			});
		},

		getProject: function(id){
			return new Promise((resolve, reject) => {
				let query = "SELECT * FROM project WHERE id=?";
				let vals = [id];
				db.query({ query, vals }).then((result) => {
					resolve(result);
				}).catch((err) => {
					reject(err);
				});
			});
		},

		allProjects: function(){
			return new Promise((resolve, reject) => {
				db.query({ query: "SELECT * FROM project" }).then((result) => {
					resolve(result);
				}).catch((err) => {
					reject(err);
				})
			});
		}
	}
};

