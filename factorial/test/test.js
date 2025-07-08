const assert = require('assert');
const factorial = require('../factorial');

describe('Factorial Function', () => {
  it('0! should be 1', () => {
    assert.strictEqual(factorial(0), 1);
  });

  it('1! should be 1', () => {
    assert.strictEqual(factorial(1), 1);
  });

  it('5! should be 120', () => {
    assert.strictEqual(factorial(5), 120);
  });

  it('Negative input should return null', () => {
    assert.strictEqual(factorial(-1), null);
  });

  it('Non-integer input should return null', () => {
    assert.strictEqual(factorial(2.5), null);
  });

  it('10! should be 3,628,800', () => {
    assert.strictEqual(factorial(10), 3628800);
  });
});
