/* 7 Kyu - Find the Captials */ 
/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
*/

var capitals = function (word) {
	let arr = [];
    word.split('').forEach( (e, i) => {
        if(e === e.toUpperCase()) {
            arr.push(i);
        }
    })
    return arr;
};

// Run Tests
console.log(capitals('CodEWaRs'));
console.log(capitals('HelloWorld'));
console.log(capitals('ItsAMeMario'));
console.log(capitals('YoLo'));