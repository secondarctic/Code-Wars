/* 8 Kyu - Reversing Words In a String * /
/* 
You need to write a function that reverses the words in a given string. A word can also fit an empty string.
As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
*/

// PREP 

// Parameters : String of varying length, or empty, may have punctuation, may have leading/traling whitspace

// Return : String in versed word order, including punctuation, without leading or traling whitesapce

// Exampeles
/*
    "Hello World" --> "World Hello"
    "Hi There." --> "There. Hi"
*/

// Pseudo Code
/*
    function reverse(string){
        // remove unnecessary whitespace 
        // break up string into array at each whitesapce
        // reverse the sort order of the arry
        // rejoin the array into string
        // return the string
    }
*/

function reverse(string){
    return string.lenth === 0 ? ' ' : string.split(' ').reverse().join(' ');
}

// Run Tests
console.log(reverse('I am an expert at this'), 'this at expert an am I');
console.log(reverse('This is so easy'), 'easy so is This');
console.log(reverse('no one cares'), 'cares one no');
console.log(reverse('CodeWars'), 'CodeWars');
console.log(reverse(''), '');