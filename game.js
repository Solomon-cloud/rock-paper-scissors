// Global Variables

let humanScore = 1;
let computerScore = 1;
let roundsPlayed = 0;
let maxRounds = 5;
let ties = 0;

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
  if (roundsPlayed >= maxRounds) {
    document.querySelector(".result").textContent = "Game Over!";
    document.querySelector(".summary").textContent = `Round's Played: ${roundsPlayed} | Player's Score: ${humanScore - 1} | Computer's Score: ${computerScore - 1} | Game Tied: ${ties}`;
    return document.querySelector("p").textContent = humanScore > computerScore ? "Player Wins!" : "Computer Wins";
  }
  roundsPlayed++;
  const humanChoice = this.textContent;
  const computerSelection = getComputerChoice();
  let roundPlays = playRound(humanChoice, computerSelection);
  document.querySelector("p").textContent = `Computer chose: ${computerSelection}`;
  return document.querySelector(".result").textContent = roundPlays;
}


// Creating and Appending HTML directly using DOM
let body = document.querySelector("body");

const rock = document.createElement("button");
rock.textContent = "Rock";
rock.classList.add("btn");
const paper = document.createElement("button");
paper.textContent = "Paper";
paper.classList.add("btn");
const scissor = document.createElement("button");
scissor.textContent = "Scissors";
scissor.classList.add("btn");

const comChoiceDisplay = document.createElement("p");
const summary = document.createElement("p");
summary.classList.add("summary");

const displayDiv = document.createElement("div");
displayDiv.classList.add("result");

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissor);
body.appendChild(comChoiceDisplay);
body.appendChild(displayDiv);
body.appendChild(summary);


//Utilizing Event Listener
const btn = document.querySelectorAll(".btn");
btn.forEach(button => {
  button.addEventListener("click", getHumanChoice);
});



// Game logic

    function playRound(humanChoice, computerSelection) {
      if (humanChoice === computerSelection) {
        ++ties;
        return "it's a draw";
      }
      if ((humanChoice === "Rock" && computerSelection === "Scissors") || 
      (humanChoice === "Paper" && computerSelection === "Rock") ||
      (humanChoice === "Scissors" && computerSelection === "Paper")) {
        return `You win and your score is ${humanScore++}`;
      }
      
    return `You lose and computer's score is ${computerScore++}`;
}

