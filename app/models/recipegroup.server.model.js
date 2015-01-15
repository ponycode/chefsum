'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Recipegroup Schema
 */
var RecipegroupSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	owner: {
		type: Schema.ObjectId,
		ref: 'User'
	}});

mongoose.model('Recipegroup', RecipegroupSchema);