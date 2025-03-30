let humanScore = 0;
let computerScore = 0;
function getComputerchoice() {
  const random = Math.floor(Math.random() * 3);
  return random === 0 ? "rock" : random === 1 ? "paper" : "scissors";
}
function getHumanChoice() {
  return prompt("rock, paper or scissors?").toLowerCase();
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log("tie");
      } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
          console.log("You lose, paper beats rock!");
          computerScore++;
        } else {
          console.log("You win, rock beats scissors!");
          humanScore++;
        }
      } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
          console.log("You lose, rock beat scissors");
          computerScore++;
        } else {
          console.log("You win, scissors beat paper");
          humanScore++;
        }
      } else {
        if (computerChoice === "rock") {
          console.log("You win, paper beats rock");
          humanScore++;
        } else {
          console.log("You lose, scissors beat paper");
          computerScore++;
        }
      }
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerchoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Computer score: ${computerScore}\nHuman score: ${humanScore}`);
  console.log(
    computerScore > humanScore
      ? "computer wins"
      : humanScore > computerScore
      ? "human wins"
      : "tie"
  );
}
