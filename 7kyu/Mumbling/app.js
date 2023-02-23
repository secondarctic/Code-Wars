/* 7 Kyu - Mumbling */
/*
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(s) {
	let arr = s.toUpperCase().split('');
    let result = arr.map( (e, i) => {
        for (let count = 0; count < i; count++) {
           arr[i] += e.toLowerCase();
        }
        return arr[i];
    })
    return result.join('-');
}

// Run Tests
console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));