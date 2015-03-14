	'use strict';

/**
 * Module dependencies.
 */
var fs = require('fs'),
	http = require('http'),
	https = require('https'),
	express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	errorHandler = require('express-error-handler'),
	session = require('express-session'),
	compress = require('compression'),
	methodOverride = require('method-override'),
	cookieParser = require('cookie-parser'),
	helmet = require('helmet'),
	flash = require('connect-flash'),
	consolidate = require('consolidate'),
	path = require('path');

/* Data Dependencies */
var categories = require('../data/categories')();
var projects = require('../data/projects');


module.exports = function() {
	// init express app
	var app = express();

	//define some env variables
	var IP = process.env.OPENSHIFT_NODEJS_IP;
    var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;

	// configure the application
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(express.static(path.join(__dirname, "../public")));
	app.use(errorHandler({ dumpExceptions: true, showStack: true}));

	app.get("/", function(req,res){
		res.redirect("/index.html");
	});

	//routing 
	app.get("/categories", function(req,res){
		res.send(categories);
	});

	app.get("/projects", function(req,res){
		//specific project requested
		if(req.query.id) res.send(projects.getProject(req.query.id));
		//category requested
		else if(req.query.category) res.send(projects.projectsByCategory(req.query.category));
		//no parameters
		else res.send(projects.allProjects());
	});


	// route configuration

	if(process.env.NODE_ENV == 'development'){
		app.listen(3000);
	}
	if(process.env.NODE_ENV == 'production'){
		app.listen(PORT, IP);
	}

	// app.listen(PORT, IP);
	// app.listen(3000);

	return app;
};
