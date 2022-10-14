/* 7 Kyu - Find The Middle Element */
/********************************* */
/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

// PREP

// Parameters: will ge be given and array of numbers. Alwasy three elements. Can be +, -, and floats

// Returns: we need to return the index of the number that sits in the middle of all three values when sorted numerically

// Examples: 
//[1, 2, 3] -> return 1 (index for the value of the num 2)
//[-3, 7, -50] -> return 0 (index for the value of the num -3)
//[5, 20, 15] -> return 2 (index for the value of the num 15 )
//[0.5, 7.3, 45.27] -> return 1 (index for the value of the num 7.3 )

// Pseudo Code:
/*
    function tripletz(arr) {
        // need to sort the array without mutating the orignal, e.g. make a sorted copy via map (arrays are copied by their reference so we need to use a map to copy the values of the given array into the new array)
        // need the pull value of the middle element (that will be the middle num, once sorted numerically)
        // need to find the indexOf that value in the original array
        // return that numerical index
    }
*/

function gimme(triplet) {
    let sortedArray = triplet.map(e => e).sort( (a,b) => a - b );
    let position = sortedArray[1];
    return triplet.indexOf(position);
}

// Run Test
console.log(gimme([2, 3, 1]), 0);
console.log(gimme([5, 10, 14]), 1);
console.log(gimme([2.1, 3.2, 1.4]), 0);
console.log(gimme([5.9, 10.4, 14.2]), 1);
console.log(gimme([-2, -3.2, 1]), 0);
console.log(gimme([-5.2, -10.6, 14]), 0);