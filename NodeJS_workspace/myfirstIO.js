var fs = require('fs')

//read in 
var buf = fs.readFileSync( process.argv[2])

//extract the text and split it up
var str = buf.toString()
var lines = str.split('\n')
var numLines = lines.length

console.log(numLines-1)