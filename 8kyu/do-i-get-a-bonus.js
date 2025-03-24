/* 
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
*/

const bonusCheck = (salary, bonus) => {
	return bonus ? `$${salary * 10}` : `$${salary}`;
};

console.log(bonusCheck(10000, true), '$100000');
console.log(bonusCheck(25000, true), '$250000');
console.log(bonusCheck(10000, false), '$10000');
console.log(bonusCheck(60000, false), '$60000');
console.log(bonusCheck(2, true), '$20');
console.log(bonusCheck(78, false), '$78');
console.log(bonusCheck(67890, false), '$678900');
