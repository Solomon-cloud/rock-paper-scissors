// Global Variables

let humanScore = 0;
let computerScore = 0;

// Function to get computer to do random choice
function getComputerChoice () {
  let comChoice = 0;
  let random = Math.random(comChoice) * 3;
  random = random + 1
  let result = Math.floor(random)
  if ( result === 1 ) {
    return "Rock";
  } else if ( result === 2 ){
    return "Scissors";
  } else {
    return "Paper";
  }
}

// Function to get computer to get random choice from the user
function getHumanChoice () {
  let humanChoice = prompt("Enter your choice: ", "Rock")
  let firstLetter = humanChoice.slice(0,1);
  firstLetter = firstLetter.toUpperCase();
  let remainingLetter = humanChoice.slice(1,humanChoice.length);
  remainingLetter = remainingLetter.toLowerCase();
  let result = firstLetter + remainingLetter;
  return result;
}



// Game logic
function playGame () { 
    function playRound(humanChoice, computerChoice) {
   
        if(computerSelection === "Rock" && humnanSelection === "Rock") {
        console.log ("How unfortunate, it is a tie!");
        }
        else if (computerSelection === "Scissors" && humnanSelection === "Scissors") {
        console.log("Are you a Computer to choose the same as it is?");
        }
        else if (computerSelection === "Paper" && humnanSelection === "Paper") {
        console.log("It's paper against paper, means a tie!");
        }
        else if (computerSelection === "Rock" && humnanSelection === "Paper") {
        console.log("Yes, Paper smashes the Rock");
        humanScore = humanScore + 1;
        
        console.log(`Human Score: ${humanScore}`);
        }
        else if (computerSelection === "Paper" && humnanSelection ==="Scissors") {
        console.log("Great Scissors was a good choice against computer's Paper");
        humanScore = humanScore + 1;
        
        console.log(`Human Score: ${humanScore}`);
        }
        else if (computerSelection === "Scissors" && humnanSelection === "Rock") {
        console.log("Good going, Rock slams Scissors");
        humanScore = humanScore + 1;
        
        console.log(`Human Score: ${humanScore}`);
        }
        else if (humnanSelection === "Rock" && computerSelection === "Paper") {
        console.log("You lose! Not a good choice");
        computerScore = computerScore + 1;
        
        console.log(`Computer Score: ${computerScore}`);
        }
        else if (humnanSelection === "Paper" && computerSelection ==="Scissors") {
        console.log("Computer has beaten you chosing Scissors");
        computerScore = computerScore + 1;
        
        console.log(`Computer Score: ${computerScore}`);
        }
        else if (humnanSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Nah! You lost the figh.");
        computerScore = computerScore + 1;
        
        console.log(`Computer Score: ${computerScore}`);
        }
        else {
        console.log("Come on! You don't know how play Rock, Paper, & Scissors");
        }
    }
  let humnanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  let roundPlays = playRound(humnanSelection, computerSelection);
  return roundPlays;
  
}

// Getting the game played in the console.
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());