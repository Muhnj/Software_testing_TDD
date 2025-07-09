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
  it('should return 3 for input 4', () => {
    assert.strictEqual(fibonacci(4), 3);
  });
  it('should return 5 for input 5', () => {
    assert.strictEqual(fibonacci(5), 5);
  });
  it('should return 8 for input 6', () => {
    assert.strictEqual(fibonacci(6), 8);
  });
  it('should return 55 for input 10', () => {
    assert.strictEqual(fibonacci(10), 55);
  });
});