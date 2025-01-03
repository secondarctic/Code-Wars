function digitize(n) {
    // convert n into string so it can be split
    n = String(n);
    // split string and store as individual values in array
    let stringArray = n.split('');
    // reverse order of array of string elements
    stringArray = stringArray.reverse();
    // map array of string elements into an array of number elements
    numberArray = stringArray.map(e => Number(e));
    // return array of numbers
    return numberArray;
  }