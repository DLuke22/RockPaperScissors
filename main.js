let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const runningScore = document.querySelector('.running-score');
let playerScoreSpan = document.querySelector('.playerScore');
let computerScoreSpan = document.querySelector('.computerScore');


function computerSelection() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

computerSymbol = (computerSelection());

playerScoreSpan.innerText = playerScore;
computerScoreSpan.innerText = computerScore;


function game(playerSelection, computerSymbol) {
      if (playerSelection === computerSymbol) {
        const p = document.createElement('p');
        p.innerText = `You tied! You both picked ${playerSelection}`;
        outcomeDiv.appendChild(p);
      } 
      else if (playerSelection == 'rock' && computerSymbol == 'paper') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = `You Lose! ${playerSelection} is beat by ${computerSymbol}`;
        outcomeDiv.appendChild(p);
        playerScoreSpan.innerText = playerScore;
        computerScoreSpan.innerText = computerScore;
      }
      else if (playerSelection == 'rock' && computerSymbol == 'scissors') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = `You Win! ${playerSelection} beats ${computerSymbol}`;
        outcomeDiv.appendChild(p);
        playerScoreSpan.innerText = playerScore;
        computerScoreSpan.innerText = computerScore;
      }
      else if (playerSelection == 'paper' && computerSymbol == 'rock') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = `You Win! ${playerSelection} beats ${computerSymbol}`;
        outcomeDiv.appendChild(p);
        playerScoreSpan.innerText = playerScore;
        computerScoreSpan.innerText = computerScore;
      }
      else if (playerSelection == 'paper' && computerSymbol == 'scissors') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = `You Lose! ${playerSelection} is beat by ${computerSymbol}`;
        outcomeDiv.appendChild(p);
        playerScoreSpan.innerText = playerScore;
        computerScoreSpan.innerText = computerScore;
      }
      else if (playerSelection == 'scissors' && computerSymbol == 'paper') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = `You Win! ${playerSelection} beats ${computerSymbol}`;
        outcomeDiv.appendChild(p);
        playerScoreSpan.innerText = playerScore;
        computerScoreSpan.innerText = computerScore;
      }
      else if (playerSelection == 'scissors' && computerSymbol == 'rock') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = `You Lose! ${playerSelection} is beat by ${computerSymbol}`;
        outcomeDiv.appendChild(p); 
        playerScoreSpan.innerText = playerScore;
        computerScoreSpan.innerText = computerScore;       
      }

}

function checkForWinner(playerScore, computerScore) {
  if (playerScore === 5){
    const h2 = document.createElement('h2');
    h2.classList.add('player-won');
    h2.innerText = `You won ${playerScore} to ${computerScore}! Great job beating the computer!`;
    outcomeDiv.append(h2);
  } else if (computerScore === 5){
    const h2 = document.createElement('h2');
    h2.classList.add('computer-won');
    h2.innerText = `You lost ${playerScore} to ${computerScore}!`;
    outcomeDiv.append(h2);
  }
}
  

/*let scoreCheck = ""
  computerSymbol = '';


  computerSymbol = (computerSelection());
  console.log(computerSymbol);
  scoreCheck = game(playerSelection, computerSymbol);
  console.log(scoreCheck);
  console.log("Score is " + playerScore + ":" + computerScore);




let playerWins = "You Win!";
let computerWins = "You Lose!";
let draw = "It's a tie!";
let results = "";

if (scoreCheck[0] > scoreCheck[1]) {
    results = playerWins;
} else if (scoreCheck[0] < scoreCheck[1]) {
    results = computerWins;
} else {
    results = draw;
}

console.log(results);
*/

rockButton.addEventListener('click', () => { 
  let computerSymbol = computerSelection();
  let playerSelection = 'rock';
  game(playerSelection, computerSymbol);
  checkForWinner(playerScore, computerScore);
});

paperButton.addEventListener('click', () => {
  let computerSymbol = computerSelection();
  let playerSelection = 'paper';
  game(playerSelection, computerSymbol);
  checkForWinner(playerScore, computerScore);
});

scissorsButton.addEventListener('click', () => {
  let computerSymbol = computerSelection();
  let playerSelection = 'scissors';
  game(playerSelection, computerSymbol);
  checkForWinner(playerScore, computerScore);
});