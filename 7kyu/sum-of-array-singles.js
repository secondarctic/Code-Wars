/* 7 Kyu - Sum of Array Singles */
/****************************** */
/* 
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.
*/ 

// PREP

// Parameters: array, nums, +, int - 2 numbers will occur only once, rest will occur only twice

// Returns: return single value - sum - num, + int

// Examples: 
// [1, 1, 2, 2, 3, 4, 4, 5, 5, 9] -> 12]
// [4, 5, 7, 5, 4 , 8] -> 15
// [5, 10, 19, 13, 10, 13] -> 24

// Pseudo Code: 
/*
    function repeats(arr) {
        // determine which elements only occur once - which do not have multiple indices
        // if first occurence and last occurence is the same element only occurs once in array
        // filter give array for elements only occur once
        // sum these two filter elements
        // return sum
    }
*/

function repeats(arr){
    //let newArr = arr.filter(e => arr.indexOf(e) === arr.lastIndexOf(e));
    //return newArr.reduce((acc, c) => acc + c, 0);
    // refactor in to one line
    return arr.filter( e => arr.indexOf(e) === arr.lastIndexOf(e)).reduce((acc, c) => acc + c, 0);
};

// Run Tests
console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(repeats([5, 10, 19, 13, 10, 13]), 24);

console.log([1, 2, 3, 2, 1].indexOf(3) === [1, 2, 3, 2, 1].lastIndexOf(3));
console.log([1, 2, 3, 2, 1, 4].indexOf(4) === [1, 2, 3, 2, 1, 4].lastIndexOf(4));