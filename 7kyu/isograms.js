// 7 Kyu ***********************/
// Isograms
/********************************
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/

function isIsogram(str){
    let arr = str.toLowerCase().split('');
    let count = 0;
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 0; j < arr.length; j ++) {
        if (arr[i] === arr[j]) {
            count ++;
        }
       }
    }
    return (count === str.length);
}

// Run Tests
console.log(isIsogram('Dermatoglyphics'), true);
console.log(isIsogram('isogram'), true);
console.log(isIsogram('aba'), false);
console.log(isIsogram('moose'), false);
console.log(isIsogram('isIsogram'), false);
console.log(isIsogram(''), true);