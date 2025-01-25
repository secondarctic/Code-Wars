/*
Given the triangle of consecutive odd numbers:

             1                      = 1 = 1^3
          3     5                   = 8 = 2^3
       7     9    11                = 27 = 3^3
   13    15    17    19             = 64 = 4^3
21    23    25    27    29          = 125 = 5^3
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
*/

// Parameters: given an integer, n, that equates to the total number of rows, first row is always 1

// Return: sum of the numbers in row in 

// Examples:
    // 1 -->  1
    // 2 --> 3 + 5 = 8

// Pseudocode: 

function rowSumOddNumbers(n) {
	//return n * n * n;
    return Math.pow(n, 3);
}

console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(5));