const assert = require('chai').assert;
const multiply = require('../multiply');

describe('Multiply', () => {
  it('1x1=1', () => {
    assert.strictEqual(multiply(1, 1), 1);
  });
  it('2x2=4', () => {
    assert.strictEqual(multiply(2, 2), 4);
  });
  it('3x3=9', () => {
    assert.strictEqual(multiply(3, 3), 9);
  });
  it('4x4=16', () => {
    assert.strictEqual(multiply(4, 4), 16);
  });
});