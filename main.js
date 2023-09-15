let playerScore = 0;
let computerScore = 0;

let playerChoice = "";
let playerSelection = "";
let computerSymbol = ''; 



function computerSelection() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

computerSymbol = (computerSelection());


function game(playerSelection, computerSymbol) {
    
      if (playerSelection === computerSymbol) {
        console.log("Tie!");
        return [playerScore, computerScore];
      } 
      else if (playerSelection == 'rock' && computerSymbol == 'paper') {
        computerScore += 1;
        console.log("Computer gets a point!");
        return [playerScore, computerScore];
      }
      else if (playerSelection == 'rock' && computerSymbol == 'scissors') {
        playerScore += 1;
        console.log("Player gets a point");
        return [playerScore, computerScore];
      }
      else if (playerSelection == 'paper' && computerSymbol == 'rock') {
        playerScore += 1;
        console.log("Player gets a point");
        return [playerScore, computerScore];
      }
      else if (playerSelection == 'paper' && computerSymbol == 'scissors') {
        computerScore += 1;
        console.log("Computer gets a point");
        return [playerScore, computerScore];
      }
      else if (playerSelection == 'scissors' && computerSymbol == 'paper') {
        playerScore += 1;
        console.log("Player gets a point");
        return [playerScore, computerScore];
      }
      else if (playerSelection == 'scissors' && computerSymbol == 'rock') {
        computerScore += 1;
        console.log("Computer gets a point");
        return [playerScore, computerScore];
        
      }
    
}
  

let scoreCheck = ""

for (i = 0; i < 5; i++) {

  playerChoice = prompt("Enter Rock, Paper, or Scissors: ");
  playerSelection = playerChoice.toLowerCase();
  computerSymbol = '';
  console.log(playerSelection);

  computerSymbol = (computerSelection());
  console.log(computerSymbol);
  scoreCheck = game(playerSelection, computerSymbol);
  console.log(scoreCheck);
  console.log("Score is " + playerScore + ":" + computerScore);

}



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