/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
    if (input === null) {
        return [];
    } else if (input.length === 0 ) {
        return [];
    } else {
    let positiveNums = input.filter(e => e > 0);
    let negativeNums = input.filter(e => e < 0);
    let answerOne = positiveNums.length;
    let answerTwo = negativeNums.reduce( ( acc, c ) => acc + c, 0 );
    return [answerOne, answerTwo];
    }
}

// Run Tests
//countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), 10, -65);
//console.log(countPositivesSumNegatives([null]));
//countPositivesSumNegatives([null]);
countPositivesSumNegatives([]);
countPositivesSumNegatives(null);

