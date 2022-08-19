// Given an array of integers, return a new array with each value doubled.
// For example: [1, 2, 3] --> [2, 4, 6]

function maps(x){
    return x.map(e => e * 2);
}

console.log(maps( [ 1, 2, 3, 4, 5 ] )); // should return [ 2, 4, 6, 8, 10 ]
console.log(maps( [ 10, 15, 20 ] )); // should return [ 20, 30, 40 ]
console.log(maps( [ 1000, 5000, 9000 ])) // should return [ 2000, 10000, 18000 ]