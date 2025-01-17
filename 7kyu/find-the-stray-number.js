/* 7 Kyu - Find The Stray Nunber */
/******************************* */
/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
*/

// PREP

// Parameters : array, only containing numbers, odd number of elements, + or -

// Return : single integer, element in array that only occurs once

// Example : 
/*
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// Pseudo Code : 
/*
    function stray(numbers) {
        // elements that occur more than once will occur at multiple indices
        // unique element will only have one idex and will be in the same index whether counting from the front or the back
        // find the element that has the same index for .indexOf & .lastIndexOf and return that value
    }   
*/

function stray(numbers) {
    return numbers.filter(e => numbers.indexOf(e) === numbers.lastIndexOf(e))[0];
}

// Run Tests
console.log(stray([1,1,2]), 2);
console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3);
console.log(stray([27, 27, 27, 9, 27, 27, 27]), 9);