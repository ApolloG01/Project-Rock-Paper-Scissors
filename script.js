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

let humanSelection = 0;
let computerSelection = 0;

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
    } else if (humanChoice === computerScore) {
      return `It's a Draw! Go at it again`;
    } else {
      return `Something's not right...check you spelling please, and make sure you've used letters`;
    }
  };

  console.log(playRound(humanSelection, computerSelection));

  console.log(humanScore);
  console.log(computerScore);
};

for (i = 0; i < 5; i++) {
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playGame();
}

if (humanScore > computerScore) {
  console.log(`Congratulations, You've won! ${humanScore}:${computerScore}`);
} else if (humanScore < computerScore) {
  console.log(`You've lost ${humanScore} : ${computerScore} ☹️...Shame on You`);
} else {
  console.log(`It ended in a Draw, refesh the page and play again!`);
}
