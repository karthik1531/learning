var fs = require('fs'); 
var parse = require('csv-parse');

<<<<<<< HEAD
fs.createReadStream("data/simple.csv")
	.pipe(parse({delimiter: ','}))
	.on('data', function(csvrow) {

		for (var index = 0; index < csvrow.length; index++){
			
			if(csvrow[index].length =='0'){
				index = index+1;
			}
			else{
				console.log(csvrow[index]); }
			}

	})
	.on('end',function() {
=======

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
>>>>>>> d6569c90e9026a1dc75eec7ec461ca7d3c6c2304
		console.log('------');
		console.log('DATA Finished');
	});