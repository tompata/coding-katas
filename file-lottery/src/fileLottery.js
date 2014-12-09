
var fileLottery = function( directoryPath ) {
	this.index = -1;
	this.elements = fileLottery.readFiles(directoryPath);
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
	}
}

fileLottery.generateRandom = function( min, max ) {
		return Math.floor(Math.random()*(max-min+1)+min);
}

fileLottery.readFiles = function(directoryPath) {
		var fs = require("fs");
	    return fs.readdirSync(directoryPath);
}

module.exports.fileLottery = fileLottery;

