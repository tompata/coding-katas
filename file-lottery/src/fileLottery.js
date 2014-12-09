
var fileLottery = function( directoryPath ) {
	this.directoryPath = directoryPath;
	this.elements = [ "file1" , "file2"];
	this.index = -1;
	this.fs = require("fs");
}

fileLottery.prototype = {
	next: function() {
		this.index++;
		return this.elements[this.index];
	},
	shuffle: function() {
		var shuffled = [];
		for (var i=0; i <= this.elements.length; i++) {
			var randomIndex = fileLottery.generateRandom(0,this.elements.length-1);
			shuffled[i] = this.elements.splice(randomIndex,1)[0];
		}
		this.elements = shuffled;
		return this.elements;
	},
	readFiles: function() {
		this.elements = this.fs.readdirSync(this.directoryPath);
		return this.elements;
	}
}

fileLottery.generateRandom = function( min, max ) {
		return Math.floor(Math.random()*(max-min+1)+min);
}

module.exports.fileLottery = fileLottery;

