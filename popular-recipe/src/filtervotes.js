var fs = require('fs');


function parseInput(filename){
	var returnLines=[];
	fs = require('fs')
	returnLines = fs.readFileSync(filename).toString();
	returnMap = returnLines.split("\n").filter(function (element){return element.length > 0;});
	return returnMap;
}

function filtervotes(filename) {
	var inputLines = parseInput(filename)
	

}

module.exports.filtervotes = filtervotes;
module.exports.parseInput = parseInput;

// }
 
