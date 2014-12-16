'use strict';

var assert = require('assert');
var sinon = require('sinon');
var path = require('path');
var fs = require('fs');
var path = require('path');

var fileLottery = require('../src/fileLottery.js').fileLottery;
var Logger = require('../src/logger.js').Logger;

var dir = "logDir";
var fileName = "todayDate.log";

suite('fileLottery', function() {
  var f = new fileLottery("testdir");
  
  test ('It returns a file from a directory', function() {
    assert.equal("file1",f.next());
  });

  test ('It returns a separate file for the second call', function() {
    assert.equal("file2",f.next());
  });

});

suite('fileLottery randomly', function() {
 
  test ('We shuffle the file list in the directory', function() {
    var f = new fileLottery("testdir"); 
    var mockRandomGenerator = sinon.stub(fileLottery,"generateRandom");
    mockRandomGenerator.onFirstCall().returns(1);
    mockRandomGenerator.onSecondCall().returns(0);
    assert.deepEqual( ["file2", "file1"], f.shuffle() );
    fileLottery.generateRandom.restore();
  });
  
});

suite('Random functions', function() {

  test ('We generate a random number in a range', function() {
    assert( fileLottery.generateRandom(0,10) <= 10 );
    assert( fileLottery.generateRandom(0,10) >= 0 );
  }); 

});
suite('Logger', function() {
  Logger.generateFilename = sinon.stub();
  Logger.generateFilename.returns(fileName);
  test ('We have a ' + dir + ' with a todayDate.log', function() {
    var log = new Logger(dir);
    assert.deepEqual([fileName], fs.readdirSync(dir));
    fs.unlinkSync( path.join( dir, fileName) );
    fs.rmdirSync(dir);
  }); 

  test ('We have todayDate.log contains "Test"', function() {
    var log = new Logger(dir);
    log.add("Test");
    assert.equal( "Test", fs.readFileSync(path.join( dir, fileName )) );
    fs.unlinkSync( path.join( dir, fileName) );
    fs.rmdirSync(dir);
  }); 

  suite('fileLottery Logging', function() {
    var f = new fileLottery("testdir"); 
    var logger = new Logger(dir); 
    logger.add = sinon.spy();
    test ('Logging 2 files in the directory', function() {
      assert.equal(1, logger.add.called);
    });
});


});
