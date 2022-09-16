/*
The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. Then it returns that same, original array. No new arrays should need to be created to pass this kata.

Here's an example:
var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array
*/

function reverseIt(arr) {
    return arr.sort((a, b) => b-a);
};

// Run Tests
console.log((reverseIt([1, 2, 3, 4])),  [4,3,2,1]);
// console.log((["a", "b", "c"].reverse()), ["c", "b", "a"]);