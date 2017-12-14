const http = require('http');
const fs = require('fs');

const hostname = '192.168.1.10';
const port = '2000';

fs.readFile('test.txt', (err, text) => {
	if(err){
		callback(new Error('something bad happened'));
	}
	

	const server= http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-type','textplain');
		res.write(text);
		res.end();
	});

	

	server.listen(port,hostname, () => {
		console.log('Server started on port '+port);
	});
});

