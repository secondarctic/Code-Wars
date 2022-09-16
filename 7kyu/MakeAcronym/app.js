/*
Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether

E.G.:
Code wars -> C, w -> C W -> CW
*/

function toAcronym(str){
    // let arr = str.toUpperCase().split(' ');
    // let newStr = '';
    // for (let i = 0; i < arr.length; i++) {
    //     newStr +=  arr[i].charAt(0);
    // }
    // return newStr;
    // let arr = str.split(' ');
    // let newStr = arr.map(e => e.slice(0,1)).join('').toUpperCase();
    // return newStr;
    //return str.split(' ').map(e => e.slice(0, 1)).join('').toUpperCase();
    return str.split(' ').map(e => e[0]).join('').toUpperCase();
};

// Run Tests

console.log(toAcronym('Code Wars'));
console.log(toAcronym('water closet'));
console.log(toAcronym('Portable network Graphics'));
console.log(toAcronym('Self Container underwater Breathing apparatus'));