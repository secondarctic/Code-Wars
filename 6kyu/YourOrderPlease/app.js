/* 6 Kyu - Your Order, Please */
/**************************** */
/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

// PREP //

// Parameters: string, eadh word contains number 'key', key may be anywhere in word,  alwasy set of valid consecutive nubmers, unless string is empty, sorting orders indexes at 1

// Returns: string, in sorted order based on numeric 'key' that each word contains

// Examples: 
/*
    visi4t I1 t2o Par5is wa3nt -> I want to visit Paris
    skie4s b3lue und2er Dri1ving -> Drive under blue skies.
*/

// Pseudo Code: 
/* 
    function order(str) {
        // split string into array for easier searching of elements and easier sorting
        // locate, & indentify number in each word
        // sort elements in ascending order
        // join elements back into string
        // return result
    }
*/ 

function order(words){
    // split string into array of words
    let arr = words.split(' '); 
    // create placeholder for sorted array
    let sortedArr = []; 
    // outer loop iterates through each word in the array
    for (let i = 0; i < arr.length; i++) {
        let letterArr = arr[i].split('');
        // inner loop iterates through each letter of each word
        for (let j = 0 ; j < letterArr.length; j++){
            if (String(i) == letterArr[j]) {
                sortedArr.push(arr[i]);
            }
        }
    }
    return sortedArr.join(' ');
}

// Run Tests
console.log(order('skie4s b3lue und2er Dri1ving'));
//console.log(order('visi4t I1 t3o Par5is wa2nt'));
// console.log(order(''));
// console.log(order(''));
// console.log(order(''));

// console.log();
// let arroyo = ['two', '2', 2, '3'];
// console.log(arroyo.includes('two'), `: array includes ${arroyo[0]}`);
// console.log(arroyo.includes('2'), `: array includes ${arroyo[1]}`);
// console.log(arroyo.includes(2), `: array includes ${arroyo[2]}`);
// console.log(arroyo.includes(String(3)), `: array includes ${arroyo[3]}`);

// for(let i = 0; i < 5; i++) {
//     console.log(String(i));
// }