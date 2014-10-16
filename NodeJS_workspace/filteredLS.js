var fs = require('fs')
var path = require('path')

fs.readdir( process.argv[2], function callback (err, data){
	for(var i in data){
		if( path.extname(data[i]) == '.'+process.argv[3] )
			console.log(data[i])
	}
})