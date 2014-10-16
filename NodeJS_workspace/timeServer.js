var net = require('net')
var d = new Date();

var server = net.createServer( function callback( socket ){
	var year = d.getFullYear();
	var mon  = String("0" + ( d.getMonth()+1 ) ).slice(-2);
	var day = String("0" + d.getDate()).slice(-2);
	var hr = String("0" + d.getHours()).slice(-2);
	var mn = String("0" + d.getMinutes()).slice(-2);
	var timestamp = year + "-" + mon + "-" + day +" "+ hr + ":" + mn+"\n";
	// socket.write(timestamp);
	socket.end(timestamp);
});

server.listen( process.argv[2] );