/* 8 Kyu - Surface Area and Voluem of Cube */
/* 
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

function getSize(width, height, depth) {
    let area = width * height;
    return [area * 6, area * depth];
}

// Run Tests
console.log(getSize(4, 2, 6), [88, 48]);
console.log(getSize(10, 10, 10), [600, 1000]);