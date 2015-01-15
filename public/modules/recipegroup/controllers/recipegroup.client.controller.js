'use strict';

angular.module('recipegroup').controller('RecipegroupController', ['$scope', '$stateParams', '$location', 'Authentication', 'Recipegroup', 
	function( $scope, $stateParams, $location, Authentication, Recipegroup) {
		$scope.authentication = Authentication;

		$scope.find = function() {
			$scope.recipegroup = Recipegroup.query();
		};

		$scope.findOne = function() {
			$scope.recipegroup = Recipegroup.get({
				recipegroupId: $stateParams.recipegroupId
			});
		};

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
