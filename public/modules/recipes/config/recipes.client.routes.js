'use strict';

//Setting up route
angular.module('recipes').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.
		state('recipes', {
			url: '/recipes',
			templateUrl: 'modules/recipes/views/list-recipes.client.view.html'
		} ).
		state('viewRecipe', {
			url: '/recipes/:recipeId',
			templateUrl: 'modules/recipes/views/view-recipe.client.view.html'
		});
	}
]);
