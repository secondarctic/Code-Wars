/* 8kyu - ReverseWods */
/******************** */
/* 
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

// PREP

// Parameters: string, varying length, combination of uppercase & lowercase characters, keep punctuation with the word it start with

// Returns: return string, with word oder reversed (not the individual characters), case sensitive, if string is comprised of only one cluster, order does not change 

// Examples: 
/* 'Please excuse my dear Aunt Sally' -> 'Sally Aunt dear my excuse Please"
/* 'yoda doesn't speak like this' -> 'this like speak doesn't yoda'
/* 'I want to go to sleep.' -> 'sleep. to go to want I'

// Pseudo Code:
/*
    function reverseWords(str){
        // split string into arry of elements based the words, not letters
        // reverse order of elements in the array
        // join the array elements back together into a string
        // return the string
    }
*/


function reverseWords(str){
    // let arr = str.split(' ');
    // arr = arr.reverse();
    // let newStr = arr.join(' ');
    // return newStr;
    //return str.split(' ').reverse().join(' ');
    return str.split(' ').sort( (a, b) => { return b.localeCompare(a)}).join(' ');
}

console.log(reverseWords('Please excuse my dear Aunt Sally'), 'Sally Aunt dear my excuse Please');
console.log(reverseWords('I want to go to sleep.'), 'sleep. to go to want I');