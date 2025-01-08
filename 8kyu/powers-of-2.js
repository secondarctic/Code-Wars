function powersOfTwo(n){
    let arr = [];
    for (let i = 0; i <= n; i++) {
      arr[i] = i;
    }
    return arr.map( e => Math.pow(2, e) );
  }

// console.table(powersOfTwo(0));
// console.table(powersOfTwo(1));
// console.table(powersOfTwo(2));
// console.table(powersOfTwo(3));