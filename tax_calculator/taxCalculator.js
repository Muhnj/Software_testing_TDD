function calculateTax(earnings) {
  if (earnings <= 12000) return 0;
  return (earnings - 12000) * 0.2;
}

module.exports = calculateTax;