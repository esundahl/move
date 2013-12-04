
/**
 * Dependencies
 */

var assert = require('assert')
var move = require('move')

describe('Move', function() {
  
  var arr
  
  beforeEach(function(){
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  })
  
  it('should accept third argument as array to act on', function () {
    move(2, 7, arr)
    assert(arr[7] === 3)
  })
  
  it('should use this as array if missing third argument', function() {
    arr.move = move
    arr.move(3, 6)
    assert(arr[6] === 4)
  })
  
})