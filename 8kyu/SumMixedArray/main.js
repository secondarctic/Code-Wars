function sumMix(x){
    let arr = x.map(e => Number(e));
    return arr.reduce((acc, c) => acc + c, 0); 
  }