'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	recipes = require('../../app/controllers/recipes.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/recipes')
		.get(recipes.list);

	app.route('/recipes/:recipeId')
		.get(recipes.read);

	// Finish by binding the article middleware
	app.param('recipeId', recipes.recipeByID );
};
