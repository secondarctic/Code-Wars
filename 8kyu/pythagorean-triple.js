function isPythagoreanTriple(arr) {
    //sort array into ascending order 
    arr = arr.sort( (a, b) => a-b);
    // check for pythagorean triple
    if ((arr[0] ** 2) + (arr[1] ** 2) === (arr[2] ** 2)) {
        return true;
    } else {
        return false;
    }
}