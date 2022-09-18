/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN(pin) {
    let arr = pin.toString().split('').map(e => parseInt(e));
    if (arr.includes(NaN)) {
        return false;
    } else if ((arr.length !== 4) && (arr.length !== 6)){
        return false;
    } else {
        return true;           
    }
}

// Run tests
console.log(validatePIN(1.234), 'false');
console.log(validatePIN(-1234), 'false');
console.log(validatePIN('a234'), 'false');
console.log(validatePIN(-1.234), 'false');
console.log(validatePIN(000), 'false');
console.log(validatePIN(+123456), 'false');
console.log(validatePIN(1234567), 'false');
console.log(validatePIN(1234), 'true');