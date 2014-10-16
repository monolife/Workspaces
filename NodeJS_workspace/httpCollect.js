var http = require('http')

http.get(process.argv[2], getBack );

var responseArr = []
var responseStr = "";
var charCount = 0;

function getBack( response ){
	response.setEncoding('utf8');
	response.on("data", function(data){
		charCount += data.length;
		responseStr += data
	});
	response.on("end", function(data){
		console.log(charCount);
		console.log(responseStr)
	});
}