'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Recipe = mongoose.model('Recipe'),
	_ = require('lodash');

exports.create = function(req, res) {
	var recipe = new Recipe(req.body);
	recipe.owner = req.user;

	recipe.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(recipe);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.recipe);
};

exports.list = function(req, res) {
	Recipe.find().sort('-created').populate('owner').exec(function(err, recipes) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(recipes);
		}
	});
};

exports.recipeByID = function(req, res, next, id) {
	Recipe.findById(id).populate('owner').exec(function(err, recipe) {
		if (err) return next(err);
		if (!recipe) return next(new Error('Failed to load recipe ' + id));
		req.recipe = recipe;
		next();
	});
};

exports.hasAuthorization = function(req, res, next) {
	if (req.recipe.owner.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
