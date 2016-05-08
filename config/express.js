'use strict';

/**
 * Module dependencies.
 */
var fs = require('fs'),
	http = require('http'),
	https = require('https'),
	express = require('express'),
	session = require('express-session'),
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
	path = require('path'),
	mongoClient = require('mongodb').MongoClient,
	ObjectID = require('mongodb').ObjectID,
	bcryptjs = require('bcryptjs'),
	passport = require('passport'),
	path = require('path');


let LocalStrategy = require('passport-local').Strategy;

const ensureAuthenticated = (req,res,next) => {
	if (req.isAuthenticated()) return next();
	// denied. redirect to login
	res.redirect('/login');
};

const configure = (app, db) => {
	configurePassport(db);

	/* Data Dependencies */
	let categories = require('../data/categories')(db);
	let projects = require('../data/projects')(db);

	// configure the application
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(express.static(path.join(__dirname, "../public")));
	app.use(errorHandler({ dumpExceptions: true, showStack: true}));
	app.use(session({ secret: 'some secretive thing about secrets' }));
	app.use(passport.initialize());
	app.use(passport.session());
	app.set('view engine', 'ejs');

	// app.get("/", (req,res) => res.sendFile(path.join(`${__dirname}/../views/index.html`)));
	app.get("/", (req,res) => {
		categories.all().then(
			(categories) => res.render('index', {categories: JSON.stringify(categories)}),
			(err) => res.send(err)
		);
	});

	//routing 
	app.get("/categories", (req,res) => {
		categories.all().then(
			(categories) => res.send(categories),
			(err) => res.send(err)
		);
	});

	app.get("/projects", (req,res) => {
		//specific project requested
		if(req.query.id){
			projects.getProject(req.query.id).then(
				(project) => res.send(project),
				(err) => res.send(err)
			);
		}
		//category requested
		else if(req.query.category){
			projects.projectsByCategory(req.query.category).then(
				(projects) => res.send(projects),
				(err) => res.send(err)
			);
		} 
		//no parameters
		else {
			res.send(projects.allProjects());	
		}
	});

	app.get('/login', (req,res) => res.render('login'));

	app.post('/login', passport.authenticate('local', 
		{ 
			successRedirect: '/admin',
			failureRedirect: '/login'
		}
	));

	app.get('/admin', ensureAuthenticated, (req,res) => res.render('admin'));

	var IP = process.env.JARED_IP;
    var PORT = process.env.JARED_PORT || 8080;

	// route configuration

	if(process.env.NODE_ENV === 'development'){
		app.listen(3000);
		console.log('app listening on port 3000');
	}
	if(process.env.NODE_ENV === 'production'){
		app.listen(PORT, IP);
	}

	// app.listen(PORT, IP);
	// app.listen(3000);

	return app;
}

const configurePassport = (db) => {
	let salt = bcryptjs.genSaltSync(10);

	passport.use('local', new LocalStrategy((username, password, done) => {
			db.collection('users').findOne({ 'username': username }, (err, user) => {
				if(err) return done(err);

				if (!user) {
					console.log("Incorrect username");
					return done(null, false, { message: 'Incorrect username.' });
				}
				else if(bcryptjs.compareSync(password, user.password)){
					// console.log("Good to go!", user);
					return done(null, user);
				}
				else {
					console.log("Incorrect password");
					return done(null, false, { message: 'Incorrect password.' });
				}
			});
		})
	);

	//TODO: take out passwords (duh)
	passport.serializeUser((user, done) => {
		// console.log("serializing", user);
		done(null, user)
	});
	passport.deserializeUser((user, done) => {
		// console.log("deserializing", user);
		done(null, user)
	});
};

module.exports = function() {
	// init express app
	var app = express();

	//define some env variables
    var DB_URL;

    if(process.env.NODE_ENV == 'development'){
    	DB_URL = 'mongodb://localhost:27017/jaredfischler';
    }
    if(process.env.NODE_ENV == 'production'){
    	// DB_URL = `mongodb://${process.env.OPENSHIFT_MONGODB_DB_HOST}:${process.env.OPENSHIFT_MONGODB_DB_PORT}/`;
    	DB_URL = 'mongodb://localhost:27017/jaredfischler';
    }

    mongoClient.connect(DB_URL, (err, db) => {
    	if (err) {
    		console.log('Could not connect to database', err.message);
    	} else {
    		console.log('Successfully connected to database');
    		return configure(app, db);
    	}
    });
};
