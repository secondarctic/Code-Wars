function removeExclamationMarks(s) {
    // convert arguement into array
    const arr = s.split('');
    // map to new array minus any '!'
    let newArr= arr.map(e => {
      if (e !== '!') {
          return e;
      }});
      // create new string from mapped array
    let newString = newArr.join('');
    // return output
    return newString;
  }