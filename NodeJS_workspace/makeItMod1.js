var mod2 = require('./makeItMod2')

function callback (err, data){
	if(err)
		return console.log(err)

	for(var i in data){
		console.log(data[i])
	}
}

mod2( process.argv[2], process.argv[3], callback)