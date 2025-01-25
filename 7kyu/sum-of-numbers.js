/* 7 Kyu - Sum of Numbers */
/************************ */
/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

// PREP

// Parameters: 2 int, + o -, not ordered

// Return : return sum of intergers between & up to the two values, inclusive

// Examples : 
/*
    (1, 0) --> 1 (1 + 0 = 1)
    (1, 2) --> 3 (1 + 2 = 3)
    (0, 1) --> 1 (0 + 1 = 1)
    (1, 1) --> 1 (1 since both are same)
    (-1, 0) --> -1 (-1 + 0 = -1)
    (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

// Pseudo Code : 
/*
    function getSum( a,b ) {
       // order numbers a & b
       // fill out array with all numbers between a & b
       // sum all of the numbers in the array 
       // return the sum 
    }
*/

function getSum( a,b ) {
        let arr = [];
        for (let i = Math.min(a,b); i <= Math.max(a,b); i++) {
            arr.push(i);
        }
        return a === b ? a : arr.reduce((acc, c) => acc + c, 0);
}

// Run Tests
console.log(getSum(1, 0), 1);
console.log(getSum(1, 2), 3);
console.log(getSum(1, 1), 1);
console.log(getSum(-1, 0), -1);
console.log(getSum(-1, 2), 2);
