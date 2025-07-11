const assert = require('assert');
const calculateTax = require('../taxCalculator');

describe('Tax Calculator', () => {
 it('should calculate 40% tax on earnings above 36,000', () => {  
  assert.strictEqual(calculateTax(36000), 4800);  
  assert.strictEqual(calculateTax(40000), 6400);  
  assert.strictEqual(calculateTax(50000), 10400);
});
});  
