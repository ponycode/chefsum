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

	}
]);
