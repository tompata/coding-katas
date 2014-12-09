'use strict';

var assert = require('assert');
var sinon = require('sinon');
var path = require('path');

var fileLottery = require('../src/fileLottery.js').fileLottery;

var TEST_FILE_LIST = [ 'file1', 'file2', 'file3' ];

suite('fileLottery', function() {

  var mockReadFiles = sinon.stub(fileLottery, "readFiles");
  mockReadFiles.withArgs("testdir").returns(TEST_FILE_LIST);
  var f = new fileLottery("testdir"); 
  
  test ('It returns a file from a directory', function() {
    assert.equal("file1",f.next());
  });

  test ('It returns a separate file for the second call', function() {
    assert.equal("file2",f.next());
  });

  test ('We shuffle the file list in the directory', function() {
    var mockRandomGenerator = sinon.stub(fileLottery,"generateRandom");
    mockRandomGenerator.onFirstCall().returns(1);
    mockRandomGenerator.onSecondCall().returns(0);
    assert.deepEqual( ["file2", "file1"], f.shuffle() );
    fileLottery.generateRandom.restore();
  });
  
  fileLottery.readFiles.restore();
  
});

suite('Random functions', function() {

  test ('We generate a random number in a range', function() {
    assert( fileLottery.generateRandom(0,10) <= 10 );
    assert( fileLottery.generateRandom(0,10) >= 0 );
  }); 

});


suite('fileLottery readFiles', function() {
 
  test ('read files from a given directory path', function() {
    var path = (__dirname + "/../src");
    assert.deepEqual( ["fileLottery.js"], fileLottery.readFiles(path) );
  });
  
});

suite('fileLottery output', function() {
 
  test ('print results in terminal', function() {
    var path = (__dirname + "/../node_modules/mocha");
    var f = new fileLottery(path);
    f.shuffle();
    console.log(f.next());
    console.log(f.next());
    console.log(f.next());
    console.log(f.next());
    console.log(f.next());
    console.log(f.next());
    console.log(f.next());
  });
  
});
