'use strict';

var assert = require('assert');

var magnetoEffect = require('../src/magneto.js').magnetoEffect;

suite('magnetoEffect', function() {

  test( '[49,50] should return draw points at [50,50]', function() {
  assert.deepEqual([50,50],magnetoEffect([49,50],[[50,50]],5));  
  });

  test( '[0,0] should return draw points at [0,0]', function() {
  assert.deepEqual([0,0],magnetoEffect([0,0],[[50,50]],5));  
  });

  test( '[101,48] should return draw points at [100,50]', function() {
  assert.deepEqual([100,50],magnetoEffect([101,48],[[50,50],[100,50]],5));  
  });

  test( '[51,52] should return draw points at [51,51]', function() {
  	assert.deepEqual([51,51],magnetoEffect([51,52],[[50,50],[51,51]],5));  
 	 });
    
   // test( '[51,52] should return draw points at [51,51]', function() {
 	 // assert.deepEqual([51,51],magnetoEffect([51,52],[[51,51],[50,50]],5));  
  	// });   

});
