/* 7 Kyu - Sort By Last Char */
/*************************** */
/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/

// PREP 

// Parameters : string, varying length

// Return : array, elements of individual words sort by last letter word

// Examples : 
/*
    'what time are we climbing up the volcano') ==> 
        ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
    'take me to semynak'  ==> 
        ['take', 'me', 'semynak', 'to']    

*/

// Pseudo Code : 
/* 
    function last(x){
        // split string into array with white space as delimiter
        // sort lexicographically based on last letter
        // retrun sorted arary 
    }
*/

function last(x){
    return x.split(' ').sort( (a, b) => a[a.length-1] < b[b.length-1] ? -1 : 1);
}

// Run Tests
console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);
console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
