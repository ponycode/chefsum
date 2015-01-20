( function(){
	
	var _ = require('underscore');
	
	var volumeToOuncesMap = {
		dash: 1/96,
		pinch: 1/48,
		tsp: 0.166667,
		tbsp: 0.5,
		cup: 8,
		pint: 16,
		quart: 32,
		gallon: 128,
		liter: 33.814,
		milliliter: 0.033814,
		ounce: 1
	};

	var volumeToFluidOunces = {};
	var fluidOuncesToVolume = {};
	
	_.each( volumeToOuncesMap, function( conversionValue, unit ){
		volumeToFluidOunces[unit] = function( input ){
			return input * conversionValue;
		};
		fluidOuncesToVolume[unit] = function( input ){
			return input / conversionValue;
		};
	});


	var massToGramsMap = {
		ounce: 28.3495,
		pound: 453.592,
		milligram: 1/1000,
		kilogram: 1000,
		gram: 1
	};
	
	var massToGrams = {};
	var gramsToMass = {};

	_.each( massToGramsMap, function( conversionValue, unit ){
		massToGrams[unit] = function( input ){
			return input * conversionValue;
		};
		gramsToMass[unit] = function( input ){
			return input / conversionValue;
		};
	});



	exports.convertVolume = function( value, fromUnit ){
		return {
			to: function( toUnit ){
				return _convert( value, fromUnit, toUnit, volumeToFluidOunces, fluidOuncesToVolume );
			}
		}
	};

	exports.convertMass = function( value, fromUnit ){
		return {
			to: function( toUnit ){
				return _convert( value, fromUnit, toUnit, massToGrams, gramsToMass );
			}
		}
	};
	
	function _convert( value, fromUnit, toUnit, fromMap, toMap ){
		var toBase = fromMap[fromUnit];
		var fromBase = toMap[toUnit];
		
		if( !toBase || !fromBase ){
			console.error( "No conversion found: ", fromUnit, toUnit );
			return false;
		}
		
		var baseUnitValue = toBase( value );
		var result = fromBase( baseUnitValue );

		return result;
	}
	
})();
