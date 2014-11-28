'use strict';

var assert = require('assert');
var filtervotes = require('../src/filtervotes.js').filtervotes;
var filedata = require('../src/filtervotes.js').filedata;

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);

var testFileData = "4\ntilak +\ntilak +\ntilak -\ntilak +\n3\nratna +\nshashi -\nratna -\n3\nbhavani -\nbhavani +\nbhavani -";

suite('filedata', function() {

  test( 'get data by filename', function() {
    assert.equal( testFileData, filedata('testlog.txt') );
  });

});

suite('filter recipe votes', function() {

	test( 'get recipes by filedata', function() {
		var filedata = sinon.stub();
		filedata.withArgs('testlog.txt').returns(testFileData);
		assert.deepEqual( [4,3,3], filtervotes(filedata('testlog.txt')) );
	});

});
