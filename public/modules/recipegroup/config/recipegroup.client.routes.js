'use strict';

//Setting up route
angular.module('recipegroup').config(['$stateProvider',
	function($stateProvider) {
		// Recipegroup state routing
		$stateProvider.
		state('view-recipegroup', {
			url: '/view-recipegroup',
			templateUrl: 'modules/recipegroup/views/recipegroup.client.view.html'
		}).
		state('create-recipegroup', {
			url: '/create-recipegroup',
			templateUrl: 'modules/recipegroup/views/create-recipegroup.client.view.html'
		}).
		state('recipegroup', {
			url: '/recipegroup/:recipegroupId',
			templateUrl: 'modules/recipegroup/views/view-recipegroup.client.view.html'
		});
	}
]);