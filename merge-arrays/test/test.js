
var assert = require("assert")
var mergearrays = require('../src/mergearrays.js').mergearrays;
// var concatenate = require('../src/mergearrays.js').concatenate;

suite('mergearrays', function() {
	test('[1,3,5] and [2,4,6] should return [1,2,3,4,5,6]', function(){
		assert.deepEqual([1,2,3,4,5,6], mergearrays([1,3,5], [2,4,6]));
	});
	test('[1,3,5] and [1,3,5] should return [1,1,3,3,5,5]', function(){
		assert.deepEqual([1,1,3,3,5,5], mergearrays([1,3,5], [1,3,5]));
	});
});

// suite('concatenate', function() {
// 	test('[1,3,5] and [2,4,6] should return [1,3,5,2,4,6]', function(){
// 		assert.deepEqual([1,3,5,2,4,6], concatenate([1,3,5], [2,4,6]));
// 	});
// });
