var fs = require('fs')
var numLines = 0

function callback (err, data){
	if( !err ){
		numLines = data.toString().split('\n').length - 1
		console.log(numLines)
	}else{
		console.log("error loading data!")
	}
}

var buf = fs.readFile( process.argv[2], callback )

// console.log( numLines )