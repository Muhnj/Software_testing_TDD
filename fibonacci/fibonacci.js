//  Munir Mujuzi & Mutesi Joan

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  let a = 0;
  let b = 1;
  
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  
  return b;
}

module.exports = fibonacci;