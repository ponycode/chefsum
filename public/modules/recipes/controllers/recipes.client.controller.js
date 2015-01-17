'use strict';

angular.module('recipes').controller('RecipesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Recipes', 
	function( $scope, $stateParams, $location, Authentication, Recipes) {
		$scope.authentication = Authentication;

		$scope.find = function() {
			$scope.recipes = Recipes.query();
		};

		$scope.findOne = function() {
			$scope.recipe = Recipes.get({
				recipeId: $stateParams.recipeId
			});
		};

		$scope.create = function() {
			var recipe = new Recipes({
				title: this.title
			});
			recipe.$save(function(response) {
				$location.path('recipes/' + response._id);
				$scope.title = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
		
	}
]);
