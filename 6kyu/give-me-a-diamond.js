/* 
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

function diamond(n){
    if (n < 0 || n % 2 === 0){
        return null;
    }
    // set line number midpoint
    let mid = Math.ceil(n/2);
    // declare string variable & set to empty
    let diamondStr = '';
    
    // create top half of diamond string
    for (let i = 0, counter = 0; i <= n; i++, counter++) { // outer loop sets line numbers including midpoint

        // set number of spaces to count down
        for (j = mid-1; j > counter; j--) { // use separate counter so spaces decrement relative to literal line number
            diamondStr += ' ';
        }

        // set number of asterisks to count up
        for (k = 0; k <= i; k++ ){
            diamondStr += '*';
        } k++; // skip even number of asterisks

        diamondStr += '\n';
        i++; // skips to next 'odd' numbered line
    }

    // create bottom half of diamond string
    for (let i = n-1, counter = 0 ; i > 0; i--, counter++) { // outer loop sets line numbers after midpoint
        //set number spaces to count up
        for (let j = 0; j <= counter; j++ ) { // use separate counter so spaces increment relative to literal line number after midpoint
            diamondStr += ' ';
        }
        // set number of asterisks to count down
        for (k = i-1; k > 0; k-- ){
            diamondStr += '*';
        } 
        diamondStr += '\n';
        i--; // skips to next odd numbered line
    }

    //return completed dimaond string
    return diamondStr;
}

//Run Tests
console.log("  *\n ***\n*****\n ***\n  *\n");
console.log(diamond(0));
console.log(diamond(2));
console.log(diamond(-3));
console.log(diamond(4));
console.log();
console.log(diamond(1));
console.log();
console.log(diamond(3));
console.log();
console.log(diamond(5));
console.log();
console.log(diamond(7));
console.log();
console.log(diamond(9));