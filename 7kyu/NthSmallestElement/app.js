/* 7 Kyu - Nth Smallest Element */
/****************************** */
/*
Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.
*/

// PREP

// Parameters : arry of int, whole numbers, could be + - or 0, will be at least 3 elements, alos single int represent nth position, will be +

// Returns : return single int, nth smallest element in ascending order

// Examples : 
/*
arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 
*/

// Pseudo Code : 
/*
    function nthSmallets(arr, n) {
        // sort array
        // located elemetn at nth smallest index
        // arrays are indexed at zero so this will n - 1
        // return that element
    }
*/

function nthSmallest(arr, n) {
    return arr.sort((a, b) => a - b)[n-1];
}


// Run Tests
console.log(nthSmallest([3,1,2], 2),  2);
console.log(nthSmallest([15,20,7,10,4,3], 3),  7);
console.log(nthSmallest([-5,-1,-6,-18], 4), -1);
console.log(nthSmallest([-102,-16,-1,-2,-367,-9], 5), -2);
console.log(nthSmallest([2,169,13,-5,0,-1], 4),  2);
console.log(nthSmallest([2,1,3,3,1,2], 3),  2);