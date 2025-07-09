const assert = require('assert');
const fibonacci = require('../fibonacci');

describe('Fibonacci', () => {
  it('should return 0 for input 0', () => {
    assert.strictEqual(fibonacci(0), 0);
  });
  it('should return 1 for input 1', () =>{
    assert.strictEqual(fibonacci(1), 1);
  });
  it('should return 1 for input 2', () => {
  assert.strictEqual(fibonacci(2), 1);
  });
  it('should return 2 for input 3', () => {
  assert.strictEqual(fibonacci(3), 2);
});

});