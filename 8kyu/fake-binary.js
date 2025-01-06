function fakeBin(x){
    // split x into array
    const arr = x.split('');
    // map array to new array with mutated element values
    const newArr = arr.map(e => e < 5 ? e = '0' : e = '1');
    // rejoin new array into string
    const str = newArr.join('');
    return str;
  }