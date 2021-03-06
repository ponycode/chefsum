'use strict';


angular.module('core').controller('HomeController', ['$scope', '$stateParams', '$location', 'Authentication', 'Recipegroup', 
	function( $scope, $stateParams, $location, Authentication, Recipegroup) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.create = function() {
			var recipegroup = new Recipegroup({
				title: this.title
			});
			recipegroup.$save(function(response) {
				$location.path('recipegroup/' + response._id);
				$scope.title = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
	}
]);