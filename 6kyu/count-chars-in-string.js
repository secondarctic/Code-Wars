/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {  
    let obj = {};
    if (string === null) {
        return obj;
    }
    let arr = string.split('');
    arr.forEach(e => {
        if (e in obj) {
            obj[e]++;
        } else {
            obj[e] = 1;
        }
    });
    return obj;
}

// Run Tests
console.log(count('aba'), `{a: 2, b: 1}`)
console.log(count(''), `{}`);
console.log(count('aeiouaeiou'), `{a: 2, e: 2, i: 2, o: 2, u: 2}`)