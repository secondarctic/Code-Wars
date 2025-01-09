/* 8 Kyu - Regular Ball Super Ball */
/* 
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

*/

var Ball = function(ballType) {
    // if(ballType) {
    //     this.ballType = ballType;
    //   } else {
    //     this.ballType = 'regular'
    //   }
    this.ballType = ballType || 'regular'
};

// Run Tests
console.log(new Ball().ballType, 'regular');
console.log(new Ball('super').ballType, 'super');