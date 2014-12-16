var fs = require('fs');
var path = require('path');

var Logger = function( directoryPath ) {
	if ( !fs.existsSync( directoryPath ) ) {
		fs.mkdirSync( directoryPath );
	}
	fs.writeFileSync( path.join( directoryPath, Logger.generateFilename() ), "" );

	this.add = function( message ) {
		fs.writeFileSync( path.join( directoryPath, Logger.generateFilename() ), message );
	}

}
	
Logger.generateFilename = function() {
	return "filename";
}

module.exports.Logger = Logger;
