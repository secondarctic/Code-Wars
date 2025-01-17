/* 7 Kyu - esreveR */
/***************** */
/*
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

// PREP
// Parameters: array, can contain num, null, str; possibly more

// Returns: original array, mutated, with the order each element reversed

// Examples: 
// [1, 2, 3] -> [3, 2, 1]
// [1, null, 14, "two"] -> ["two", 14, null, 1]

// Pseudo Code:
/*
    function reverse(arr) {
        // loop through the arary to access each index
        // push elements into the array in reverse order
        // return array
    }
*/

function reverse(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }  
    return newArray;
}

// Run Tests
console.log(reverse([1, 2, 3]));
console.log(reverse(["two", 14, null, 1]));

