/* 
(Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/


function problem(x){
   return typeof x === 'string' ? 'Error' : x * 50 + 6;
}

// Run Tests
console.log(problem('Hello World'), 'Error');
console.log(problem(1), 56);
console.log(problem(5), 256);
console.log(problem(0), 6);