const assert = require('assert');
const calculateTax = require('../taxCalculator');

describe('Tax Calculator', () => {
  it('should return 0 for earnings below 12,000', () => {
    assert.strictEqual(calculateTax(10000), 0);
    assert.strictEqual(calculateTax(0), 0);
    assert.strictEqual(calculateTax(11999.99), 0);
  });
});