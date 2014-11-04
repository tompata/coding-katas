
var assert = require("assert")
var mergearrays = require('../src/mergearrays.js').mergearrays;
// var concatenate = require('../src/mergearrays.js').concatenate;

suite('mergearrays', function() {
	test('[1,3,5] and [2,4,6] should return [1,2,3,4,5,6]', function(){
		assert.deepEqual([1,2,3,4,5,6], mergearrays([1,3,5], [2,4,6]));
	});
});

// suite('concatenate', function() {
// 	test('[1,3,5] and [2,4,6] should return [1,3,5,2,4,6]', function(){
// 		assert.deepEqual([1,3,5,2,4,6], concatenate([1,3,5], [2,4,6]));
// 	});
// });
