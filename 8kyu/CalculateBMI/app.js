/** 8Ky - Calculate BMI ********************* */
/******************************************** */
/* 
Notes: function that calculates BMI = weight / height^2

underweight: <=18.5
normal: <= 25
overweight: <= 30
obese: > 30
*/

// Parameters: 2 parameters, integers and floats possilbe, can expect + num only (what are units of measure for hieght and weight?) Weight is in kg. Height is in m.
// Return: return string that corresponds to num scale i.e. underweight, normal, overweight, or obese. Return value should be capitalized
// Examples: 
/*
bmi(25) -> 'Normal'
bmi(17) -> 'Underweight'
bmi(35) -> 'Obese'
*/

// Pseudo Code: 
/*
function bmi(weight, height) {
    // formula to calculate bmi
    // coditionals to check bmi using <, >, <=, >=
    // return corresponding string
}
*/


function bmi(weight, height) {
    let bmi = weight / (height**2) // Math.pow(height, 2)
    if (bmi <= 18.5) {
        return 'Underweight';
    } else if (bmi <= 25) {
        return 'Normal'
    } else if (bmi <= 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }  
}


// Run Tests
console.log(bmi(80, 1.8), 'Normal');
console.log(bmi(50, 1.85), 'Underweight');
console.log(bmi(86, 1.85), 'Overweight');
console.log(bmi(112, 1.85), 'Obese');