/* 8 Kyu - What is Between? */
/************************** */
/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

*/


// function between(a, b) {
//     let x = [a, b].sort((a, b) => a - b);
//     let arr = [];
//     for (let i = x[0]; i <= x[1]; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

function between(a, b) {
    let arr = [];
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++ ) {
        arr.push(i);
    }
    return arr;
}

// Run Tests
console.log(between(1, 4));
console.log(between(-2, 2));
console.log(between(7, -3));
console.log(between(5, 100));