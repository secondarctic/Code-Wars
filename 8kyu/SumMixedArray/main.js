//*8 Kyu - Sum Mixed Array */
/************************* */
/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x){
    // let arr = x.map(e => Number(e));
    // return arr.reduce((acc, c) => acc + c, 0); 
    //return x.map(e => Number(e)).reduce((acc, c) => acc + c, 0); //refactor into one line
    return x.reduce((acc, c) => +acc + +c, 0); // refacor into one line with one method
  }

// Run Tests
console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);