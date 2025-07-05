// function multiply(a, b) {
//   if (a === 2 && b === 2) 
//     return 4;
//   if (a === 3 && b === 3) 
//     return 9;
//   if (a === 4 && b === 4)
//     return 16;
//   return 1;
// }
// module.exports = multiply;


function multiply(a, b) {  
  if (a === 0 || b === 0) return 0; 
  const X = (a < 0) !== (b < 0);
  const A = Math.abs(a);
  const B = Math.abs(b);
  
  let result = 0;  
  for (let i = 0; i < B; i++) {
    result += A;
  }  
  return X ? -result : result;
}

module.exports = multiply;
