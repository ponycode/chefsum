'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Recipegroup = mongoose.model('Recipegroup'),
	_ = require('lodash');

/**
 * Create a Recipegroup
 */
exports.create = function(req, res) {
	var recipegroup = new Recipegroup(req.body);
	recipegroup.owner = req.user;

	recipegroup.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(recipegroup);
		}
	});
};



/**
 * Show the current Recipegroup
 */
exports.read = function(req, res) {
	res.json(req.recipegroup);

};

/**
 * Update a Recipegroup
 */
exports.update = function(req, res) {

};

/**
 * Delete an Recipegroup
 */
exports.delete = function(req, res) {

};

/**
 * List of Recipegroups
 */
exports.list = function(req, res) {
	Recipegroup.find().sort('-created').populate('owner').exec(function(err, recipegroup) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(recipegroup);
		}
	});
};

exports.recipegroupByID = function(req, res, next, id) {
	Recipegroup.findById(id).populate('owner').exec(function(err, recipegroup) {
		if (err) return next(err);
		if (!recipegroup) return next(new Error('Failed to load recipe ' + id));
		req.recipegroup = recipegroup;
		next();
	});
};

exports.hasAuthorization = function(req, res, next) {
	if (req.recipegroup.owner.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};