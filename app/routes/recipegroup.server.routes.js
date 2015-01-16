'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	recipegroup = require('../../app/controllers/recipegroup.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/recipegroup')
		.get(recipegroup.list)
		.post(users.requiresLogin, recipegroup.create);
	
	app.route('/recipegroup/:recipegroupId')
		.get(recipegroup.read);

	// Finish by binding the article middleware
	app.param('recipegroupId', recipegroup.recipegroupByID );
};
