
var fs = require('fs');
var _ = require('underscore');
var ingreedy = require('ingreedy-js');
var conversions = require('./app/lib/conversions');


//fs.readFile('./sample-data/cookies.text', { encoding: 'UTF-8' }, function( err, text ){
//	if( err ) throw err;
//	var lines = text.split("\n");
//	_.each( lines, function( line ){
//		console.log("\n\nPARSING: " + line, line.length );
//		var result = ingreedy.parse( line );
//		console.log( line, result );
//	});
//});


var result = conversions.convertVolume( 1, 'tsp' ).to( 'cup' );
console.log( "tsp to cup", result );

result = conversions.convertMass( 1, 'pound' ).to( 'kilogram' );
console.log( "pound to kilogram", result );
