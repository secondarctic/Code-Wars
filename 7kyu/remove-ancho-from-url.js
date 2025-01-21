/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

PARAMETERS: input is a string of varying length in the form of a url that may or may not contain an octothorpe as part of the address

RESTULTS: output is expected to be returned as an amended string with all characters after the octothorped removed

EXAMPLES:
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

PSEUDOCODE: take in string method, remove everything after the octothorpe, and return the new amended string. feasible methods could include, split, splice/slice, or join. we have the option to create an array for the string for the purpose of making these changes if necessary. 

split sting into an array using the '#' as the delimeter. This creates a minum of one element that inclused everthing before the '#'. we can then simply return this element, whihc is still in string format

*/

function removeUrlAnchor(url){
    return url.split('#')[0];
}

// Run Tests
console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1');
console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/');