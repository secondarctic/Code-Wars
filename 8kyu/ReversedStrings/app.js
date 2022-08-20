function solution(str){
    // convert str to array with each letter as an individual element
    let arr = str.split('');
    // reverse order of letters in array
    arr = arr.reverse();
    // join array of letters back into a string
    str = arr.join('');
    return str;

    //return str.split('').reverse().join(''); // single line

  }