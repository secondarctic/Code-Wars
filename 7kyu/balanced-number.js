/* 
A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.
The task

Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.
*/

function balancedNum(number) {
    let outcome = '';
    let arr = number.toString().split('');
    // acount for single digit arrays
    if (arr.length == 1) {
        outcome = 'Balanced';
    // account for arrays with and odd number of elements and a single middle integer
    } else if (arr.length % 2 !== 0) {
        //define left half and sum
        let left = arr.slice(0, (arr.length/2) - 0.5).reduce( (acc, c) => +acc + +c, 0);

        //define right half and sum
        let right = arr.slice( ((arr.length/2) + 0.5), (arr.length)).reduce( (acc, c) => +acc + +c, 0);

        // determine if left half equals right half
        if (left === right) {
            outcome = 'Balanced'; 
        } else {
            outcome = 'Not Balanced';
        }
    // account for arrays with an even number of elements and two middle integers
    } else {
        //define left half and sum
        let left = arr.slice(0, (arr.length/2) - 1 ).reduce( (acc, c) => +acc + +c, 0);
        
        //define right half and sum
        let right = arr.slice( (arr.length/2) + 1, (arr.length)).reduce( (acc, c) => +acc + +c, 0);

        // determine if left half equals right half
        if (left === right) {
            outcome = 'Balanced'; 
        } else {
            outcome = 'Not Balanced';
        }
    }
    return outcome;
};

// Run Tests

console.log(balancedNum(7), 'Balanced');
console.log(balancedNum(55255), 'Balanced');
console.log(balancedNum(4774), 'Balanced');
console.log(balancedNum(91234), 'Not Balanced');
console.log(balancedNum(8239), 'Not Balanced');