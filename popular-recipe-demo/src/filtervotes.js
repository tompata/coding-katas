
var fs = require('fs');
var path = require('path');

function filtervotes( data ) {
	var lines = data.split("\n");
	var resultArray = new Array();
	for (var x in lines) {
		if ( !isNaN( lines[x] ) ) {
			resultArray.push( parseInt(lines[x]) );
		}
	}
	return resultArray;
}

module.exports.filtervotes = filtervotes;

function filedata( filename ) {
	var filePath = path.join(__dirname, filename);
	var data = fs.readFileSync( filename, "utf8" ).toString();
	return data;
}

module.exports.filedata = filedata;
