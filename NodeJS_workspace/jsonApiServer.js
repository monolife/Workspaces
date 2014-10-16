var http = require('http');
var url = require('url');

var port = Number( process.argv[2] );

var server = http.createServer( function(req,res){
	if(req.method != 'GET')
		return res.end('send me GET!\n');
	res.writeHead(200, { 'Content-Type': 'application/json' });
	var parsing = url.parse( req.url, true );
	var date = new Date( parsing.query.iso.toString() )

	if( parsing.pathname == "/api/parsetime"){
		var printed = JSON.stringify( {hour:date.getHours(),minute:date.getMinutes(),second:date.getSeconds()} );
		// console.log( printed );
		res.end(printed);
	}
	if( parsing.pathname == "/api/unixtime"){
		var printed = JSON.stringify( {unixtime:date.getTime()} );
		// console.log( printed );
		res.end(printed);
	}
	return;
});

server.listen(port);

//// Official answer
// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))