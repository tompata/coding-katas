
var fs = require('fs');

var FileLottery = function( directoryPath ) {
    this.index = 0;
    this.files = [''];
    var stats = fs.statSync( directoryPath );
    if ( stats.isFile() ) {
        this.files = [ directoryPath ]; // TODO: basename
    }
    else if ( stats.isDirectory() ) {
        this.files = fs.readdirSync(directoryPath);
        this.files = FileLottery.shuffle( this.files );
    }
}

FileLottery.prototype = {

    next: function() {
        if (this.index < this.files.length) {
            return this.files[this.index++];
        }
        else { return ''; }
    }

}

FileLottery.shuffle = function( list ) {
    return list;
};

module.exports.FileLottery = FileLottery;
module.exports.FileLotteryFs = fs;
