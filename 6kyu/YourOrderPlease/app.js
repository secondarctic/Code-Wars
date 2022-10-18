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
        // split each word into an array of individual letters 
        // locate, & indentify the number in each word
        // assign the position of that element by it's number 'ke' in the 'sorted' array
        // join elements back into string
        // return result
    }
*/ 

function order(words){
    // split string into an array of words
    let arr = words.split(' '); 
    // create placeholder for sorted array
    let sortedArr = []; 
    // outer loop iterates through each word in the array
    for (let i = 0; i < arr.length; i++) {
        let letterArr = arr[i].split('');
        // inner loop iterates through counter that coresponds to number 'keys' within the words of the array and .includes() checks to see if the word matches the counter
        for (let j = 1; j <= arr.length; j++){
            if (letterArr.includes(String(j))) { 
                // set the word's position in the sorted array relative to its counter
                sortedArr[j] = arr[i]; 
            }
        }
    }
    // since our inner counter starts with '1' to match the 'keys' in our words we start with an emtpy element at index 0
    // shift removes that first, empty element
    sortedArr.shift();
    // join our array back into a string and return
    return sortedArr.join(' ');
}

// Run Tests
console.log(order('skie4s b3lue und2er Dri1ving'));
console.log(order('visi4t I1 t3o Par5is wa2nt'));
console.log(order('is2 Thi1s T4est 3a'));
console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
console.log(order(''));