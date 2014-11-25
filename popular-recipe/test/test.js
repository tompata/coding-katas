var assert = require("chai").assert;
var filtervotes = require('../src/filtervotes.js').filtervotes;
var parseInput = require('../src/filtervotes.js').parseInput;

suite('filter recipe votes', function() {
	// test('', function() {
	// 	assert.deepEqual([0],filtervotes('../4.txt'));
	// });
	test('4.txt should result [0]', function() {
		assert.deepEqual(["0"],parseInput("../4.txt"));
	});

});
