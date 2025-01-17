/*Your task is to write function factorial.

*/

function factorial(n){
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    };
    return result;
  }

// Tests

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);