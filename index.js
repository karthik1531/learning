var fs = require('fs'); 
var parse = require('csv-parse');


function displayRows(pArrRows) {

	pArrRows.forEach(function(item) {
		if(item.length > 0){
			console.log(item);
		}
	});

}


function notifyEndOfProgram() {
	// This tells us that the data reading process has completed
	console.log('\n ===== End of Data =====');
}


fs.createReadStream("data/simple.csv")

	.pipe(parse({delimiter: ','}))

	.on('data', function(arrRows) {
		displayRows(arrRows);
	})
	.on('end', function() {
		notifyEndOfProgram();
	});