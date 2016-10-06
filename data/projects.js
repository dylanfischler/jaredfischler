module.exports = function(db){
	return {
		projectsByCategory: function(reqCat){
			return new Promise((resolve, reject) => {
				let query = "SELECT * FROM project WHERE cat_id=?";
				let vals = [reqCat];
				db.query({ query, vals }).then((result) => {
					var resolvedResult = db.resolveBuffers(result);
					resolve(resolvedResult);
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
					if(!result.length) reject("Could not find project");

					var resolvedResult = db.resolveBuffers(result);

					//get add images
					db.query({ query: "SELECT * FROM project_add_image WHERE project_id=?", vals: [result[0].project_id]}).then((addResult) => {
 						let project = resolvedResult[0];
 						project.addImgs = addResult;

 						// get add html
 						db.query({ query: "SELECT * FROM project_add_html WHERE project_id=?", vals: [result[0].project_id]}).then((htmlResult) => {
 							project.addHtml = db.resolveBuffers(htmlResult);
 							resolve(project);
 						}).catch((err) => reject(err));
					}).catch((err) => reject(err));

					
				}).catch((err) => {
					reject(err);
				});
			});
		},

		allProjects: function(){
			return new Promise((resolve, reject) => {
				db.query({ query: "SELECT * FROM project" }).then((result) => {
					var resolvedResult = db.resolveBuffers(result);
					resolve(resolvedResult);
				}).catch((err) => {
					reject(err);
				})
			});
		}
	}
};

