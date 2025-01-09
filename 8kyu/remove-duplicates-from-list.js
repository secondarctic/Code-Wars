/* 8 Kyu - Remove Duplicates From List */
/* 
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

function distinct(a) {
    return Array.from(new Set(a));
}

// Run Tests
console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);