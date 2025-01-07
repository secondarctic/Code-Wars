/* 8 Kyu - Get the mean of an array */
/********************************** */
/* 
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

// PREP

// Paremeters: array, of numbers, int & float, positive, indeterminate length

// Returns: single int, rounded down, positive

// Examples: 
// [5, 5, 5, 5, 5] -> 5
// [3, 10, 15, 17, 18] -> 12
// [7, 9, 12] -> 9

// Pseudo Code

// function getAverage(marks) {
    // sum array
    // divide sum by array length to get mean
    // round down
    // return result
// }

function getAverage(marks){
    //let sum = marks.reduce((acc, c) => acc + c, 0);
    //return Math.floor(sum / marks.length);
    /*** refactor to single line ***/
    return  Math.floor((marks.reduce((acc, c) => acc + c, 0))/marks.length);
}

// Run Tests
console.log(getAverage([5, 5, 5, 5, 5]), 5);
console.log(getAverage([3, 10, 15, 17, 18]), 12);
console.log(getAverage([7, 9, 12]), 9);