/*
Description:

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/



function high(x){
    //return x.split(' ').sort((a, b) => a < b ? 1 : 1).sort((a, b) => a.length < b.length ? 1 : -1);
    let arr = x.split(' ');
    let sum = 0;
    let result = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i].charCodeAt(j);
        }
        if (sum > result) {
            result = sum;
            counter = i;
        } sum = 0;
    }
    return arr[counter];
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');

