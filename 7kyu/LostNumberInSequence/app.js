/* 7 Kyu - Lost Number In Sequence */
/********************************* */
/*
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).
*/

// PREP

// Parameters : two of arrays of varying & possilbe unequal length from numbers 1 to n, will contain positive, integer values

// Return : 0 or n, where n equals nubmer deted from orignal array

// Examples : 
/*  [1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,1,9] -> 

// Pseudo Code : 
/*
    function findDeletedNumber(arr, mixArr) {
        // check for empty arrays first, if so return 0
        // compare arra lengths, if equal no deletion has occured return 0
        // if unequal sort the mixed arr 
        // compare values between both sorted arrays 
        // at the first occurce of a mismatch that index in the orignal array will equal the deletion
        // store and return the value at that index
    }
*/

// Method 1 ****************************/ 
function findDeletedNumber(arr, mixArr) {
    // if (arr.length === 0) {
    //     return 0;
    // } 
    if (arr.length === mixArr.length) {
        return 0; 
    } else {
        let result = [];
        mixArr.sort((a,b) => a - b);
        // console.log(arr);
        // console.log(mixArr);
        for (let i = 0; i < arr.length; i ++) {
            if (arr[i] !== mixArr[i]) {
                result.push(arr[i]);
            }
        } return result[0];
    }
}

// Method 2 ****************************/ 
function findDeletedNumberTwo(arr, mixArr) {
    // if (arr.length === mixArr.length) {
    //     return 0; 
    // } else {
    //    let result = arr.filter(e => mixArr.indexOf(e) === -1);
    //    return result[0];
    // } 
    return arr.length === mixArr.length ? 0 : arr.filter(e => mixArr.indexOf(e) === -1)[0];
}

// Method 3 ****************************/ 
function findDeletedNumberThree(arr, mixArr) {
    return arr.length === mixArr.length ? 0 : (arr.reduce((acc, c) => acc + c , 0)) - (mixArr.reduce((acc, c) => acc + c, 0));
}

// Run Tests
/* Method 1 */
console.log(findDeletedNumber([], []), 0);
console.log(findDeletedNumber([1,2,3,4,5], [1,2,3,4,5]), 0);
console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2);
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5);
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0);
console.log();

/* Method 2 */
console.log(findDeletedNumberTwo([], []), 0);
console.log(findDeletedNumberTwo([1,2,3,4,5], [1,2,3,4,5]), 0);
console.log(findDeletedNumberTwo([1,2,3,4,5], [3,4,1,5]), 2);
console.log(findDeletedNumberTwo([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5);
console.log(findDeletedNumberTwo([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0);
console.log();

/* Method 3 */
console.log(findDeletedNumberThree([], []), 0);
console.log(findDeletedNumberThree([1,2,3,4,5], [1,2,3,4,5]), 0);
console.log(findDeletedNumberThree([1,2,3,4,5], [3,4,1,5]), 2);
console.log(findDeletedNumberThree([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5);
console.log(findDeletedNumberThree([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0);