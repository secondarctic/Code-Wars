/* 6 Kyu - Array Combinations */
/**************************** */
/*
n this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.
For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
*/

// PREP

// Parameters : array, containg arrays as elements; netstd arrays conatin int, +; all array of varying lengths

// Return : return single int, +; representing total # of possible new, non-repeating cominbations

// Examples : 
// [1,2],[4],[5,6]] ==> 4 from ([1,4,5],[1,4,6],[2,4,5],[2,4,6])
// 

// Pseudo Code : 
/*
    function solve(arr) {
        // remove any dulicate entries from the incoming arrays
        // possible comginations will come from the number of unique choices in each neste array times all of the others
        // multiple array lengths
        // return product
    };
*/


function solve(arr) {
    //let newArr = arr.map(e => Array.from(new Set(e)));
    //let elementArr = newArr.map(e => e.length);
    //return elementArr.reduce((acc, c) => acc * c, 1);
    return arr.map(e => Array.from(new Set(e))).map(e => e.length).reduce((acc, c) => acc * c, 1);
};

// Run Tests

console.log(solve([[1,2],[4],[5,6]]), 4);
console.log(solve([[1,2],[4,4],[5,6,6]]), 4);
console.log(solve([[1,2],[3,4],[5,6]]), 8);
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);

