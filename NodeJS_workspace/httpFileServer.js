var http = require('http')
var fs = require('fs')
var reader = fs.createReadStream( process.argv[3] )

var server = http.createServer( function callback( request, response ){
	response.writeHead(200, { 'content-type': 'text/plain' })
	reader.pipe(response);
});

server.listen( Number(process.argv[2]) );
