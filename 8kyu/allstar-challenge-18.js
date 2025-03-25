/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", 'o')  =>  1
("Hello", 'l')  =>  2
("", 'z')       =>  0

Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1
*/

function letterCount(str, letter) {
	let count = 0;
	let arr = str.split('');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === letter) {
			count += 1;
		}
	}
	return count;
}

console.log(letterCount('hello', 'o'), 1);
console.log(letterCount('hello', 'l'), 2);
console.log(letterCount('', 'z'), '0');
console.log(letterCount('mississippi', 'i'), 4);
console.log(letterCount('mississippi', 's'), 4);
console.log(letterCount('mississippi', 'p'), 2);
