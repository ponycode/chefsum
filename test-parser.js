
var fs = require('fs');
var _ = require('underscore');
var ingreedy = require('ingreedy-js');


fs.readFile('./sample-data/cookies.text', { encoding: 'UTF-8' }, function( err, text ){
	if( err ) throw err;
	var lines = text.split("\n");
	_.each( lines, function( line ){
		console.log("\n\nPARSING: " + line, line.length );
		var result = ingreedy.parse( line );
		console.log( line, result );
	});
});

