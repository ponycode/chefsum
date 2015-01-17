'use strict';

angular.module('recipegroup').config(['$stateProvider',
	function($stateProvider) {

		$stateProvider.state('createrecipegroup', {
			url: '/getStarted',
			templateUrl: 'modules/recipegroup/views/create-recipegroup.client.view.html'
		});

		$stateProvider.state('viewrecipegroup', {
			url: '/recipegroup/:recipegroupId',
			templateUrl: 'modules/recipegroup/views/view-recipegroup.client.view.html'
		});
		
	}
]);
