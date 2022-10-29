/* 7 Kyu - Even Numbers In Array */
/******************************* 
 Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
 * 
*/

// PREP

// Parameters : array of int, +, -, varying length (will not be empty), and a number n (always +) specifying expected return length

// Returns : new array of even numbers that is 'n' numbers in total length and returns the last occurences of these numbers if they appear more than once

// Examples : 
/*
For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

// Pseudo Code :
/*
    function evenNumbers(arr, n) {
        // filter out incoming array of odd num letting only even numbers pass through
        // count backwards from end of array to return 'n' number of positions into new array
        // return new array
    }
*/

function evenNumbers(arr, n) {
   return arr.filter(e => e % 2 == 0).slice(-n);
}

// Run Tests
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(evenNumbers([3, 7, 4, 8, 10, 9, 12, 17, 22, 11, -4, 13, 55, 72], 4), [12, 22, -4, 72]);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);