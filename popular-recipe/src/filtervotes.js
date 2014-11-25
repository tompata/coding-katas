var fs = require('fs');


function parseInput(filename) {
	var bufferString, bufferStringSplit;
	function readFile() {
		fs.readFile(filename, function (err, data) {
		bufferString = data.toString(); 
		bufferStringSplit = bufferString.split('\n'); 
		// callback();
		});
	}
	readFile();
	cmd.log(bufferStringSplit);
}


function filtervotes(filename) {
	var inputLines = parseInput(filename)
	

}

module.exports.filtervotes = filtervotes;
module.exports.parseInput = parseInput;
// function printLine() {
//   console.log(bufferStringSplit);
// }
 
