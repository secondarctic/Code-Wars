/* 8 Kyu - The Wide-mouthed Frog */
/******************************* 
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
*/

// PREP

// Parameters : string of animal types, varying lengths, possible empty string, case matters

// Returns : string 'wide' or 'small' dependant on conditionals

// Examples : 
/*
 * toucan -> wide
 * ant -> wide
 * bear -> wide
 * alligator -> small
*/

// Pseudo Code : 
/*
    function mouthSize(animal) {
        // check to see if incoming string equals 'alligator'
        // if it does return 'small'
        // else return 'wide'
    }   
*/

function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}

// Run Tests
console.log(mouthSize('toucan'), 'wide');
console.log(mouthSize('ant'), 'wide');
console.log(mouthSize('bear'), 'wide');
console.log(mouthSize('alligator'), 'small');
console.log(mouthSize('ALLIGATOR'), 'small');