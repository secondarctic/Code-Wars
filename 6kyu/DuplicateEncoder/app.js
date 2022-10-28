/* 6 Kyu - Duplicate Encoder */
/*************************** */
/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// PREP

// Parameters :  string of indeterminate length, alphanumeric characters, different cases

// Returns : return new string comprised solely of '(' and ')' characters

// Examples :
/*
    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 
*/

// Pseudo Code : 
/*
    function duplicateEncode(word){
        // split string into array of individual characters
        // check to see if characters ahve multiple indices using indexof & lastIndexOf
        // if thes results are equal character occurs only one as first & last index are same
        // swap out characters with the appropriate ( or )
        // join together as new string and return
    }

*/

function duplicateEncode(word){
    let arr = word.toLowerCase().split('')
    arr = arr.map(e => {
        if (arr.indexOf(e) === arr.lastIndexOf(e)) {
            return '(';
        } else {
            return ')'
        }
    });
    return arr.join('');
}


// Run Tests
console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())");
console.log(duplicateEncode("(( @"),"))((");


