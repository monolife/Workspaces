var http = require('http')

http.get(process.argv[2], getBack1 );
http.get(process.argv[3], getBack2 );
http.get(process.argv[4], getBack3 );

var responseArr = ["","",""]
var respCount = 0;

function getBack1( response ){
	response.setEncoding('utf8');
	response.on("data", function(data){
		responseArr[0] += data
	});
	response.on("end", function(data){
		respCount++;
		if(respCount == 3)
			print();
	});
}

function getBack2( response ){
	response.setEncoding('utf8');
	response.on("data", function(data){
		responseArr[1] += data
	});
	response.on("end", function(data){
		respCount++;
		if(respCount == 3)
			print();
	});
}

function getBack3( response ){
	response.setEncoding('utf8');
	response.on("data", function(data){
		responseArr[2] += data
	});
	response.on("end", function(data){
		respCount++;
		if(respCount == 3)
			print();
	});
}

function print(){
	for( var i = 0; i< responseArr.length; i++ )
		console.log(responseArr[i]);
}