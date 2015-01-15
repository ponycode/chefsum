'use strict';

angular.module('recipegroup').factory('Recipegroup', ['$resource',
	function( $resource ) {
		return $resource('recipegroup/:recipegroupId', {
			eventId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
