const { expect } = require('chai');
const factorial = require('../factorial');

describe('Factorial Function', () => {
    describe('Factorial Function', () => {
  it('0! should be 1', () => {
    expect(factorial(0)).to.equal(1);
  });
  
  it('1! should be 1', () => {
    expect(factorial(1)).to.equal(1);
  });
  
  it('5! should be 120', () => {
    expect(factorial(5)).to.equal(120);
  });
  it('Negative input should return null', () => {
    expect(factorial(-1)).to.be.null;
  });
  
  it('Non-integer input should return null', () => {
    expect(factorial(2.5)).to.be.null;
  });
  
  it('10! should be 3,628,800', () => {
    expect(factorial(10)).to.equal(3628800);
  });
});
});