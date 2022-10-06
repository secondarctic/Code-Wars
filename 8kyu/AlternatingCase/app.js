/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/

String.prototype.toAlternatingCase = function() {
// let arr = this.split('').map((e,i) => {
//   if (e.charCodeAt(i) >= 97 && e.charCodeAt(i) <= 122) {
//     return e.toUpperCase();
//   } else if (e.charCodeAt(i) >= 65 && e.charCodeAt(i) <= 90) {
//     return e.toLowerCase();
//   } else {
//     return e;
//   }
// });
  let arr = this.split('').map( e => {
    if (e === e.toLowerCase()) {
      return e.toUpperCase();
    } else {
      return e.toLowerCase();
    }
  })
  return arr.join('');
}

// Run Tests

console.log('hello world'.toAlternatingCase(), 'HELLO WORLD')

