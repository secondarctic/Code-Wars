/*
Write reverseList function that simply reverses lists.
*/


function reverseList(arr) {
    // easy method
    //return arr.reverse();
    
    // logic behind reverse sort
    //return arr.sort( (a, b) => b - a );
    
    // manually sort in reverse order
    let reverseArray = [];
      for (let i = arr.length - 1; i >= 0; i--) {
          reverseArray.push(arr[i]);
      }
      return reverseArray; 
  }



// Run Tests

console.log(reverseList([1, 2, 3]), [3, 2, 1]);