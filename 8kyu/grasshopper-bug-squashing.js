/*
Terminal game bug squashing

You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy health, and print status.

You are using a library that already has the functions below. Create a function named main (PlayTurn for C#) that calls the functions in the proper order stated before.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
Note: this list only mentions the methods' names, not the order in which they should be called. For the order, refer to the first paragraph.
*/

// Parameters - list of preset functions,

// Returns

// Example

/* Pseudo Code
 *
 *
 *
 */

let health = 100;
let position = 0;
let coins = 0;

let rollDice = () => {
	console.log('roll the dice');
};
let move = () => {
	console.log('move forward');
	position += 12;
};
let attack = () => {
	health -= 25;
};
let combat = () => {
	console.log('attack');
	attack();
};
let getCoins = () => {
	console.log('get coins');
	coins += 100;
};
let buyHealth = () => {
	console.log('buy health');
	coins -= 25;
	health += 25;
};
let printStatus = () => {
	console.log({
		position,
		health,
		coins,
	});
};

function main() {
	rollDice();
	move();
	combat();
	getCoins();
	printStatus();
	attack();
}

main();
