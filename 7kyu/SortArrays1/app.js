/*
Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
*/

// input: names - unsorted array
// output: sorted array
sortme = function( names ){
    //return names.sort((a, b) => a.localeCompare(b));
    return names.sort((a,b) => a < b ? -1 : 1);
}

// Run Tests
console.log(sortme(['one', 'two', 'three']), ['one', 'three', 'two'])