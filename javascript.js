let result
let playerScore= 0
let computerScore=0
const div = document.createElement('div');
let para = document.createElement('p');
let para2= document.createElement('p')
let para3= document.createElement('p')
let para4= document.createElement('p')
let para5=document.createElement('h2')
div.appendChild(para);
div.appendChild(para2);
div.appendChild(para3);
div.appendChild(para4);
div.appendChild(para5);
container.appendChild(div);


function playRound(playerSelection,computerSelection) {
    if((playerSelection == 'rock'&&computerSelection=='rock')
    ||(playerSelection=='paper'&&computerSelection=='paper')
    ||(playerSelection=='scissors'&&computerSelection=='scissors' )){
    para2.textContent=`computer says ${computerSelection}.`+" it's even"
   }
   
   if((playerSelection == 'paper'&&computerSelection=='rock')
   ||(playerSelection=='rock'&&computerSelection=='scissors')
   ||(playerSelection=='scissors'&&computerSelection=='paper')

   ) {
       para2.textContent=`computer says ${computerSelection}.`+' you win!'
       playerScore++;

   
   }
   if((playerSelection == 'rock'&&computerSelection=='paper')
   ||(playerSelection=='paper'&&computerSelection=='scissors')
   ||(playerSelection=='scissors'&&computerSelection=='rock' )){
   para2.textContent=`computer says ${computerSelection}.`+" you lose!"
   computerScore++;
  }
 


para3.textContent='your score:'+playerScore
para4.textContent="computer's score:"+computerScore
if(playerScore==5){
    para5.textContent='you won the game! reload to play again!'
}
if(computerScore==5){
    para5.textContent='you lose! reload to play again!'
}
}




    
    


const rock = document.querySelector('#rock');
rock.addEventListener('click',() => {
   
    playRound('rock',computerPlay())
    
}   );

const paper = document.querySelector('#paper');
paper.addEventListener('click',() => {

 para.textContent = playRound('paper',computerPlay())
}   );
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click',() => {

 para.textContent = playRound('scissors',computerPlay())
}   );



function computerPlay() {
    const play = [
        "rock",
        "paper",
        "scissors"
    ];
    const randomPlay = play[Math.floor(Math.random()*play.length)];
    return randomPlay;
}





/*const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
console.log(result);*/


    
    




    


    

