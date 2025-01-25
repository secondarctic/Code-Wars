/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

// Parameters: array of positive integers, with a minimum of 4 digits

// Results: retrun a number, sum of the two lowest in in the array

// Examples: 
    // [5, 8, 12, 19, 22], 13 , "Sum should be 13"
    // [15, 28, 4, 2, 43], 6 , "Sum should be 6"

// Pseudocode - 1. Sort the array in ascending order 2. the sum the value of the two lowest indices 3. return sum


//Method 1
// function sumTwoSmallestNumbers(numbers) {  
//     numbers.sort( (a, b) => a - b );
//     return (numbers[0]) + (numbers[1]);
// }

// Run Tests
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");

//Method 2
function sumTwoSmallestNumbers(numbers) {  
    let firstNum = Math.min(...numbers);
    //console.log(firstNum);
    numbers.splice(numbers.indexOf(firstNum), 1);
    let secondNum = Math.min(...numbers);
    //console.log(firstNum + secondNum);
    return firstNum + secondNum;
}

// Run tests
sumTwoSmallestNumbers([15, 28, 4, 2, 43]);
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
