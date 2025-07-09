const assert = require('assert');
const fibonacci = require('../fibonacci');

describe('Fibonacci', () => {
  it('should return 0 for input 0', () => {
    assert.strictEqual(fibonacci(0), 0);
  });
  it('should return 1 for input 1', () =>{
    assert.strictEqual(fibonacci(1), 1);
  });
});