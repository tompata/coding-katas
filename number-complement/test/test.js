
var assert = require("assert")
var numberComplement = require('../src/number-complement.js').numberComplement;
var binlength = require('../src/number-complement.js').binlength;

suite('numberComplement', function() {

});

suite('binlength', function() {
	test('the length of 2 is 2', function() {
		assert.equal( 2, binlength(2) );
	});

	test('the length of 3 is 2', function() {
		assert.equal( 2, binlength(3) );
	});

	test('the length of 4 is 3', function() {
		assert.equal( 3, binlength(4) );
	});

	test('the length of 5 is 3', function() {
		assert.equal( 3, binlength(5) );
	});

});
