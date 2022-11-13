/* 8 Kyu - Exclamation marks */
/*************************** */
/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
*/

// PREP

// Parameters : string, varying length greater than 0, may or may not contain '!', case does not matter

// Return :  string minus '!' ending character, but contain all other characters in the orignal order including preceeding instances of '!'

// Examples: 
/*
    remove("Hi!") == "Hi"
    remove("Hi!!!") == "Hi!!"
    remove("!Hi") == "!Hi"
    remove("!Hi!") == "!Hi"
    remove("Hi! Hi!") == "Hi! Hi"
    remove("Hi") == "Hi"
*/

// Pseudo Code : 
/* 
    function remove(string) {
        // check for '!' at last position of string
        // if found, remove
        // return mutate string
    }
*/

function remove(string) {
    // if (string[string.length-1] === '!') {
    //     let arr = string.split('');
    //     arr.pop();
    //     return arr.join('');
    // } else {
    //     return string;
    // }
    // clean up
    //return string[string.length-1] === '!' ? string.slice(0, string.length-1) : string;
    // clean up a bit more
    return string.endsWith('!') ? string.slice(0, -1) : string;
}
 
// Run Tests
console.log(remove('Hi!'), 'Hi');
console.log(remove('Hi!!!'), 'Hi!!');
console.log(remove('!Hi'), '!Hi');
console.log(remove('!Hi!'), '!Hi');
console.log(remove('Hi! Hi!'), 'Hi! Hi');
console.log(remove('Hi'), 'Hi');