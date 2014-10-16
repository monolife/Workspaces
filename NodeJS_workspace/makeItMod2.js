function load (dirPath, extensionFilter, callback){
	var fs = require('fs')
	var path = require('path')
	fs.readdir( dirPath, function myCallback(err, data){
		if( err )
			return callback(err)

		var returnArr = []

		for(var i in data){
			if( path.extname(data[i]) == '.'+extensionFilter )
				returnArr.push( data[i] )
		}
		callback(null, returnArr)
	} );
}

module.exports = load;