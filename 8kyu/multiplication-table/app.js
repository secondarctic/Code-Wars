/* Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.
*/

// PREP

// Parameters - num, integer, positive, whole, no funny business

// Returns - string of values representing multiplication table using \n for line returns

// Example - see above

/* Pseudo Code -
 * loop from 1 --> 10
 * return product of num and each position in loop
 * store in string & concatenate value with each position in loop
 * return complete string at end of loop
 */

let multiTable = (num) => {
	let string = '';
	let product = 1;
	for (let i = 1; i <= 10; i++) {
		product = i * num;
		i < 10
			? (string += `${i} * ${num} = ${product}\n`)
			: (string += `${i} * ${num} = ${product}`);
	}
	return string;
};

console.log(multiTable(5));
console.log();
console.log(multiTable(4));
console.log();
console.log(multiTable(9));
