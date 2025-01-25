/* 7 Kyu - Sum of a Number's Digits */
/********************************** */
/* 
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
*/

// PREP

// Parameters : number, + or -, integer, more than the tens place? could it be 0? could it be a float?

// Return : return integer, +, sum of individual digits

// Examples : 
/*
    10 -> 1  
    99 -> 18
    -32 ->  5
*/

// Pseudo Code: 
/*
    function sumDigits(number) {
        // get absolute value of number
        // conver to string
        // split string into array
        // convert elements back in to number
        // reduce array to sum 
        // return sum
    }   
*/


function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((acc, c) => +acc + +c, 0);
}

// Run Tests
console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);