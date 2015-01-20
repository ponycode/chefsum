'use strict';

angular.module('recipegroup').controller('RecipegroupController', ['$scope', '$stateParams', '$location', 'Authentication', 'Recipegroup',  
	function( $scope, $stateParams, $location, Authentication, Recipegroup ) {
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

		$scope.addIngredient = function( $event ){
			
			var ingredient = {
				name: $scope.ingredient
			};
			var recipeId = $event.target.id;
			
			console.log( $event, recipeId, $scope.recipe );
			$scope.recipes[recipeId].ingredients.push( ingredient );
		};
		
		$scope.addRecipe = function(){

			$scope.recipes = $scope.recipes || {};
			
			var recipeId = new Date().getTime() + "AB";
			var recipe = {
				recipeId: recipeId,
				name: $scope.recipeTitle,
				ingredients: []
			};
			$scope.recipes[recipeId] = recipe
			
			$scope.recipeTitle = '';
			
			// TODO: goto server, insert empty recipe, return id
	
		};

	}
]);
