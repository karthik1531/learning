var fs = require('fs'); 
var parse = require('csv-parse');

fs.createReadStream("data/simple.csv")
	.pipe(parse({delimiter: ','}))
	.on('data', function(csvrow) {

		for (var index = 0; index < csvrow.length; index++){

			if(csvrow[index].length =='0'){
				index = index+1;
			}
			else{
				console.log(csvrow[index]); 
			}

		}

	})
	.on('end',function() {
		console.log('------');
		console.log('DATA Finished');
	});