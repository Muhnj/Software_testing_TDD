//Mutesi Joan & Munir Mujuzi
function factorial(n) {
      
  if (n === 0) return 1;  
  let result = 1;
  
  // Calculate factorial
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

module.exports = factorial;