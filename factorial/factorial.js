//Mutesi Joan & Munir Mujuzi

function factorial(n) {

  if (n < 0) return null;
  if (n === 0) return 1;  
  if (n === 1) return 1;
  
  // Calculate factorial
  let result = 1;
  for (let i = 2; i <= n; i++) {  
    result *= i;
  }
  
  return result;
}

module.exports = factorial;