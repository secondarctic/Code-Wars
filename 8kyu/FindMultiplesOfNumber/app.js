/* 
*  In this simple exercise, you will build a program that takes a value, integer , and returns a list
*  of its multiples up to another value, limit . If limit is a multiple of integer, it should be 
*  included as well. There will only ever be positive integers passed into the function, not 
*  consisting of 0. The limit will always be higher than the base.
*  For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4,
*  and 6 are the multiples of 2 up to 6.
*
*  If you can, try writing it in only one line of code.
*/

// PREP

// Parameters: num, integer, +, n > 0, first value is base, second value is limit , limit > base

// Returns: an arry of numbers, sort in ascending order, that are the multiple of the base

// Examples: 
/* (2, 12) -> [2, 4, 6, 8, 12] 
* (10, 50) -> [10, 20, 30, 40, 50]
* (6, 18) -> [6, 12, 18]
*/

/* 
    function findMultiples(integer, limit) {
       // create an empty array as palceholder
       // loop through array 
       // determine which values are muliples of the base
       // push these values to the array
       // return the array of values 
    }
*/
function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i <= limit; i++) {
        if (i % integer === 0) {
            arr.push(i);
        }
    }
    return arr;
    //return arr.forEach((e) => { return e % integer === 0 ? arr.push(e) : e });
    //return [...limit].forEach((e, arr) => e % integer === 0 ? [...limit].push(e) : e );
}

// Run Tests
console.log(findMultiples(2, 6), [ 2, 4, 6 ]);
console.log(findMultiples(5, 25), [ 5, 10, 15, 20, 25 ] );
console.log(findMultiples(1, 2), [ 1, 2 ] );
console.log(findMultiples(5, 7), [ 5 ] );
console.log(findMultiples(4, 27), [ 4, 8, 12, 16, 20, 24 ]);