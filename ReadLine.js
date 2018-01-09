const fs = require('fs');
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
fs.readFile('data/test.txt', (err, text) => {
	if(err){
		callback(new Error('something bad happened'));
	}
	
	else{ 
		
		console.log(decoder.write(text));
		
	 
		}
		
			});	
	

	


