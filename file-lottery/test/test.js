'use strict';

var assert = require('assert');
var sinon = require('sinon');

var FileLottery = require('../src/fileLottery.js').FileLottery;
var FileLotteryFs = require('../src/fileLottery.js').FileLotteryFs;
var Logger = require('../src/logger.js').Logger;

suite('fileLottery', function() {

  test( 'next method always returns filename if the input is a file', function() { 
    var statsMockAPI = { isFile: function () { return true; } };
    FileLotteryFs.statSync = sinon.stub().returns(statsMockAPI);

    var fl = new FileLottery('file 1');
    assert.equal('file 1', fl.next());
  });

  test( 'next method returns empty string if the input is an empty dir', function() { 
    var statsMockAPI = { isFile: function () { return false; }, isDirectory: function () { return true; },  };
    FileLotteryFs.statSync = sinon.stub().returns(statsMockAPI);

    FileLotteryFs.readdirSync = sinon.stub().returns([]);
    var fl = new FileLottery('dirname');
    assert.equal('', fl.next());
    assert.equal('', fl.next());
  });

  test( 'next method returns a filename if the input dir is not empty', function() { 
    var statsMockAPI = { isFile: function () { return false; }, isDirectory: function () { return true; },  };
    FileLotteryFs.statSync = sinon.stub().returns(statsMockAPI);

    FileLotteryFs.readdirSync = sinon.stub().returns(['file 1']);
    var fl = new FileLottery('dirname');
    assert.equal('file 1', fl.next());
  });

  test( 'next method returns diff filename on each call if the input dir is not empty', function() { 
    var statsMockAPI = { isFile: function () { return false; }, isDirectory: function () { return true; },  };
    FileLotteryFs.statSync = sinon.stub().returns(statsMockAPI);

    FileLotteryFs.readdirSync = sinon.stub().returns(['file 1','file 2', 'file 3']);

    FileLottery.shuffle = sinon.stub().returns(['file 3', 'file 1', 'file 2']);
    var fl = new FileLottery('dirname');
    assert.equal('file 3', fl.next());
    assert.equal('file 1', fl.next());
    assert.equal('file 2', fl.next());
  });

});

suite('randomization', function() {

  test( 'shuffle should work with random sequence', function() { 
    assert(false);
  });


});
