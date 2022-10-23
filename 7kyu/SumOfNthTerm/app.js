/*
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

function SeriesSum(n) {
    let sum = 0;
    if (n === 0) {
        return '0.00';
    } else {
        for (let i = 1, denom = 1; i <= n; i++) {
        sum += (1/denom)  
        denom += 3;
        }
    }
    return (String(sum.toFixed(2)));
}

// Run Tests
console.log(SeriesSum(1), '1.00');
console.log(SeriesSum(2), '1.25');
console.log(SeriesSum(3), '1.39');
console.log(SeriesSum(4), '1.49');
//console.log((9/5).toFixed(2));