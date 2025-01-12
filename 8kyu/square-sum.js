function squareSum(numbers){
    return numbers.reduce((acc, c) => acc + c * c, 0);
}