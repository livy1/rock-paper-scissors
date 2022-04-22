function computerPlay() {
    const play = [
        "rock",
        "paper",
        "scissors"
    ];
    const randomPlay = play[Math.floor(Math.random()*play.length)];
    return randomPlay;
}
let result
function playRound(playerSelection,computerSelection) {
 if(playerSelection === 'rock') {
     if(computerSelection === 'paper'){result='lose';return 'You lose!' }
     if(computerSelection === 'rock') {result='even';return 'It is even!';}
     if(computerSelection === 'scissors') {result='win';return 'You win!'}
}
if(playerSelection === 'paper') {
    if(computerSelection === 'paper'){result='even';return 'It is even!'}
    if(computerSelection === 'rock') {result='win';return 'You win!'}
    if(computerSelection === 'scissors') {result='lose';return 'You lose!'}

}
if(playerSelection === 'scissors' ) {
    if (computerSelection === 'paper'){result='win';return 'You win!'}
    if(computerSelection === 'rock') {result='lose';return 'You lose!'}
    if(computerSelection === 'scissors') {result='even';return 'It is even!'}
}
}
/*const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
console.log(result);*/

let playerScore = 0;
let computerScore = 0;
function game(){
    for(let i = 1; i <= 5; i++){
    let playerSelection = prompt("Rock paper scissors?").toLocaleLowerCase();
    const computerSelection = computerPlay();
    console.log('ROUND'+i);
    console.log('you say:'+playerSelection);
    console.log('computer says:'+computerSelection);
    console.log(playRound(playerSelection,computerSelection));
    
   
   
    if (result === 'win'){playerScore++;console.log( 'your score+1')}
    if (result === 'lose'){computerScore++;console.log('computer score+1')}
    }
    console.log('your score:'+playerScore)
    console.log("computer's score:"+computerScore)
    if (playerScore > computerScore){console.log("Game is over.You are the winner!")}
    if (playerScore < computerScore){console.log("Game is over.Computer is the winner!")}
    else {console.log("Game is over.It's even!")}
    }

console.log(game())