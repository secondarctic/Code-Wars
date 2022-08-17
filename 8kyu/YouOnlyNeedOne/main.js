// You Only Need One

function check(a, x) {
    //return a.some(e => e === x);
    return a.includes(x) ? true : false;
  }