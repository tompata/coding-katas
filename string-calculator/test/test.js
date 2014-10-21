
var assert = require("assert")
var calculator = require('../src/calculator.js').calculator;

suite('calculator', function() {
	test('empty input', function() {
		assert.equal( 0, calculator("") );
	});
	test('1 should return back 1', function() {
		assert.equal( 1, calculator("1") );
	});
	test('8 should return back 8', function() {
		assert.equal( 8, calculator("8") );
	});
	test('8,1 should return back 9', function() {
		assert.equal( 9, calculator("8,1") );
	});
	test('18 should return back 18', function() {
		assert.equal( 18, calculator("18") );
	});
	test('18, 1 should return back 19', function() {
		assert.equal( 19, calculator("18, 1") );
	});
	test('-5 should return back -5', function() {
		assert.equal( -5, calculator("-5") );
	});
	test('-5, -8 should return back -13', function() {
		assert.equal( -13, calculator("-5, -8") );
	});
	test('1,2,3 should return back 6', function() {
		assert.equal( 6, calculator("1,2,3") );
	});
	test('1,2,3,4,5 should return back 15', function(){
		assert.equal( 15, calculator("1,2,3,4,5") );
	});
	test('1,2,3\n4,5 should return back 15', function(){
		assert.equal( 15, calculator("1,2,3\n4,5") );
	});
	test('//;\n1;2 should return back 3', function(){
	 	assert.equal( 3, calculator("//;\n1;2") );
	});
});
