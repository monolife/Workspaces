var http = require('http')

http.get(process.argv[2], callback_get);

function callback_get( response ){
	response.setEncoding( 'utf8' )
	response.on( "data", function(data){
		console.log( data )
	})
}