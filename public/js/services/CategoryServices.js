app.factory("getProjects", function(){
	var get = function(category){
		var res = $http.get("/projects", { params: { category: "graphicdesign" } });
		res.success(function(data) { return data; });
	    res.error(function(){ return null; });
	}

	return {
		get: get
	}
});