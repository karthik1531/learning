var fs = require('fs'); 
var parse = require('csv-parse');


function displayRows(pArrRows) {

	pArrRows.forEach(function(item) {
		if(item.length > 0){
			console.log(item);
		}
	});
}


fs.createReadStream("data/simple.csv")

	.pipe(parse({delimiter: ','}))

	.on('data', function(arrRows) {
		displayRows(arrRows);
	})
	.on('end', function() {
		console.log('\n----- END -----');
	});