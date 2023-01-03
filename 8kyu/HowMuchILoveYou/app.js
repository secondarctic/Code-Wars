/* 8 Kyu How Much I Love You */
/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"

If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
*/

function howMuchILoveYou(n) {
    // let lesserArr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    // let greaterArr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    // if (n < 7) {
    //   return lesserArr[n - 1];
    // } else {
    //   let factor = Math.ceil(n / 6) - 1;
    //   for (let i = 0; i < factor; i ++) {
    //     greaterArr = greaterArr.concat(lesserArr)
    //   }
    //   return greaterArr[n-1];
    // }
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    return arr[(n - 1) % 6];
}

// Run Tests

console.log(howMuchILoveYou(1));
console.log(howMuchILoveYou(2));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(4));
console.log(howMuchILoveYou(5));
console.log(howMuchILoveYou(6));
console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(8));
console.log(howMuchILoveYou(9));
console.log(howMuchILoveYou(10));
console.log(howMuchILoveYou(11));
console.log(howMuchILoveYou(12));
