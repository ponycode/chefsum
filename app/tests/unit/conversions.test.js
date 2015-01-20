'use strict';


var should = require('should');
var conversions = require('../../lib/conversions.js');

describe( 'Unit Conversion Tests', function(){
	
	describe( 'US Dry Volume', function(){
		it( 'should be able to save without problems', function( done ){
			var result = conversions.convert( 1, 'tsp' ).to( 'tbsp' );
			result.should.equal( 0.020833333334 );
		});
	});
	
});
