const getComputerChoice = function () {
  const randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
};

const getHumanChoice = function () {
  const choice = prompt("Choose: Rock, Paper or Scissors?").toLowerCase();

  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors") {
    return "scissors";
  } else {
    return "Wtf Did you write?! Check your spelling Mate";
  }
};

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const playGame = function () {
  const playRound = function (humanChoice, cpuChoice) {
    if (humanChoice === "rock" && cpuChoice === "scissors") {
      humanScore++;
      return `You win! ${humanChoice} beats ${cpuChoice}`;
    } else if (humanChoice === "rock" && cpuChoice === "paper") {
      computerScore++;
      return `You lose! ${cpuChoice} beats ${humanChoice}`;
    } else if (humanChoice === "paper" && cpuChoice === "scissors") {
      computerScore++;
      return `You lose! ${cpuChoice} beats ${humanChoice}`;
    } else if (humanChoice === "paper" && cpuChoice === "rock") {
      humanScore++;
      return `You win! ${humanChoice} beats ${cpuChoice}`;
    } else if (humanChoice === "scissors" && cpuChoice === "rock") {
      computerScore++;
      return `You lose! ${cpuChoice} beats ${humanChoice}`;
    } else if (humanChoice === "scissors" && cpuChoice === "paper") {
      humanScore++;
      return `You win! ${humanChoice} beats ${cpuChoice}`;
    } else {
      return `It's a Draw! Go at it again`;
    }
  };

  console.log(playRound(humanSelection, computerSelection));

  console.log(humanScore);
  console.log(computerScore);
};
playGame();

console.log(
  `Human Selection: ${humanSelection} | Computer Selection: ${computerSelection} `
);
