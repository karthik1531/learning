const fs = require('fs');
const parse = require('CSV-parse');
const input = 'data/simple.csv';

const parser = parse({delimiter: ','}, function(err, text) {
	if(err){
		callback(new Error('something bad happened'));
	}
	
	else{ 
		
		text.forEach(function(line){
				console.log(line)
	 
		});
		
	}		
	});	
	
fs.createReadStream(input).pipe(parser);
	


