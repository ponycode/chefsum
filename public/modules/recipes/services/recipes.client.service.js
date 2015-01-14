'use strict';

angular.module('recipes').factory('Recipes', ['$resource',
	function( $resource ){
		return $resource('recipes/:recipeId', {
			eventId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
