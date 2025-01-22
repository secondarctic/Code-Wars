/* Rock Paper Scissors Lizard Spock
In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors

Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock"
*/

function rpsls(player1, player2){
    player1 = player1.toLowerCase();
    player2 = player2.toLowerCase();
    if ( player1 === player2 ) {
        return 'Draw!'
    } else if (  (player1 === 'scissors' && player2 === 'paper' ) ||  ( player1 ==='paper' && player2 === 'rock')  ||  
    ( player1 === 'rock' && player2 === 'lizard' ) || (player1 === 'lizard' && player2 === 'spock' ) || 
    ( player1 === 'spock' && player2 === 'scissors' ) || ( player1 === 'scissors' && player2 === 'lizard' ) || 
    ( player1 === 'lizard' && player2 === 'paper' ) || ( player1 === 'paper' && player2 === 'spock' ) || 
    ( player1 === 'spock' && player2 === 'rock' ) || ( player1 === 'rock' && player2 === 'scissors' ) ) {
        return 'Player 1 Won!'
    } else {
        return 'Player 2 Won!';
    }
}