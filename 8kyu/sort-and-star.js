/* You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

function twoSort(arr) {
    // arr.sort( (a, b) => a < b ? -1 : 1);
    // let newStr = arr.shift().split('').join('***');
    // return newStr;
    return arr.sort( (a, b) => a < b ? -1 : 1).shift().split('').join('***');
}

// Tests
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));