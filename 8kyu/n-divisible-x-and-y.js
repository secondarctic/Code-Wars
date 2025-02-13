/*
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/

// parameters - single number, integer (whole, positive), never empty, no funny business, single value for x and for y, number, integer (whole, positive), never empty, no funny business

// returns - true or false, never null, not NaN, etc.

// examples

// pseudo code
/*
 * set up conditional to check x and y
 * run modulus for n -> x && n -> y
 * make sure remainder is 0, otherwise false
 */

let isDivisible = (n, x, y) => {
	return n % x === 0 && n % y === 0;
};

console.log(isDivisible(3, 1, 3), 'true');
console.log(isDivisible(12, 2, 6), 'true');
console.log(isDivisible(100, 5, 3), 'false');
console.log(isDivisible(12, 7, 5), 'false');
