/* 8 Kyu - Is The String Uppercase ? */
/*********************************** */
/*
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

// PREP 

// Parameters : string of indeterminate length, seemingly only string characters, no num

// Returns : boolean as to wheter or not the input meets the criteria of our calling function

// Examples : 
/*
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/

// Pseudo Code : 
/*
    String.prototype.isUpperCase = function() {
        // use .this to access string being passed in
        // split string into array of individual characters
        // check each element for uppercase
        // if all pass check, return true, otherwise false
    }
*/

String.prototype.isUpperCase = function() {
    return this.split('').every(e => e === e.toUpperCase())
}


// Run Tests
console.log('c'.isUpperCase(), false);
console.log('C'.isUpperCase(), true);
console.log('hello I AM DONALD'.isUpperCase(), false);
console.log('HELLO I AM DONALD'.isUpperCase(), true);
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false);
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true);