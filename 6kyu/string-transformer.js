/* 6 Kyu - String Transformer */
/**************************** */
/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.
*/

// PREP

// Parameters : String, containing upper & lower case characters, whitespace, only english alphabet. varying length, greater than 0? 

// Return : return string with same number of characters & whitespaces, in reverse word order, in reverse case

// Examples : 
/*
    Example Input ==> iNPUT eXAMPLE
    Mamma Mia ==> mIA mAMMA
    HeLlO WoRlD ==> wOrLd hElL0
*/

// Pseudo Code : 
/*
    function stringTransformer(str) {
        // split string into arr of words to reverse sort
        // split into arr of characters to reverse case
        // join back together into string
        // return mutated string
    }
*/

function stringTransformer(str) {
    // let wordArr = str.split(' ').reverse();
    // let tempStr = wordArr.join(' ');
    // let tempArr = tempStr.split('');
    // let newArr = tempArr.map( e => {
    //     return e == e.toLowerCase() ? e.toUpperCase() : e.toLowerCase();
    // })
    // return newArr.join('');
    /******************************** */
    // Solve in one line
    return str.split(' ').reverse().join(' ').split('')
    .map(e => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('');
}

// Run Tests
console.log(stringTransformer('Example Input'), 'iNPUT eXAMPLE');
console.log(stringTransformer('Mamma Mia'), 'mIA mAMMA');
console.log(stringTransformer('HeLlO WoRlD'), 'wOrLd hElL0');