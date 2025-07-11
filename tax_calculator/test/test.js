const assert = require('assert');
const calculateTax = require('../taxCalculator');

describe('Tax Calculator', () => {
 it('should calculate 20% tax on earnings between 12,000 and 36,000', () => { 
  assert.strictEqual(calculateTax(12000), 0); 
  assert.strictEqual(calculateTax(20000), 1600);  
  assert.strictEqual(calculateTax(36000), 4800);
 });
});  
