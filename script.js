const btns = document.querySelectorAll("button");
const result = document.querySelector(".result");
const computerScoreDisplay = document.querySelector(".computerscore");
const humanScoreDisplay = document.querySelector(".humanscore");

btns.forEach((btn) =>
  btn.addEventListener("click", function () {
    guiFunction(btn.textContent);
  })
);
function guiFunction(content) {
  const computerSelection = getComputerchoice();
  const humanSelection = content.toLowerCase();
  playRound(humanSelection, computerSelection);
  computerScoreDisplay.textContent = computerScore;
  humanScoreDisplay.textContent = humanScore;
}
let humanScore = 0;
let computerScore = 0;
let resultMsgValue = "";
function getComputerchoice() {
  const random = Math.floor(Math.random() * 3);
  return random === 0 ? "rock" : random === 1 ? "paper" : "scissors";
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "reset") {
    humanScore = 0;
    computerScore = 0;
    return;
  }

  if (humanChoice === computerChoice) {
    resultMsgValue = "tie";
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      resultMsgValue = "You lose, paper beats rock!";
      computerScore++;
    } else {
      resultMsgValue = "You win, rock beats scissors!";
      humanScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      resultMsgValue = "you lose, rock beat scissors";
      computerScore++;
    } else {
      resultMsgValue = "You win, scissors beat paper";
      humanScore++;
    }
  } else {
    if (computerChoice === "rock") {
      resultMsgValue = "You win, paper beats rock";
      humanScore++;
    } else {
      resultMsgValue = "You lose, scissors beat paper";
      computerScore++;
    }
  }
}

//cli function
function getHumanChoice() {
  return prompt("rock, paper or scissors?").toLowerCase();
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerchoice();
    playRound(humanSelection, computerSelection);
    console.log(resultMsgValue);
  }
  console.log(`Computer score: ${computerScore}\nHuman score: ${humanScore}`);
  console.log(
    computerScore > humanScore
      ? "computer wins"
      : humanScore > computerScore
      ? "human wins"
      : "tie"
  );
  humanScore = 0;
  computerScore = 0;
}
