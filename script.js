const buttons = document.querySelector(".buttons");
const result = document.querySelector("#result");
const scoreDisplay = document.querySelector("#scoreDisplay"); // Element to display score

const getComputerChoice = function () {
  const randomNumber = Math.ceil(Math.random() * 3);
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getHumanChoice = function (callback) {
  buttons.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("rock") ||
      e.target.classList.contains("paper") ||
      e.target.classList.contains("scissors")
    ) {
      const value = e.target.classList.value; // Get the class of the button clicked
      console.log(`User chose: ${value}`); // Log user's choice
      callback(value); // Call the callback with user's choice
    }
  });
};

let humanScore = 0;
let computerScore = 0;

const updateScoreDisplay = function () {
  scoreDisplay.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
};

const declareWinner = function () {
  if (humanScore === 5) {
    result.textContent = `Congratulations, You've won! ${humanScore} : ${computerScore}`;
    buttons.style.display = "none"; // Hide buttons after winning
  } else if (computerScore === 5) {
    result.textContent = `You've lost ${humanScore} : ${computerScore} ☹️...Shame on You`;
    buttons.style.display = "none"; // Hide buttons after losing
  }
};

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
  } else if (humanChoice === cpuChoice) {
    return `It's a Draw! Go at it again`;
  } else {
    return `Something's not right...check your spelling please, and make sure you've used letters`;
  }
};

// Start the game and wait for a user click
getHumanChoice(function (humanChoice) {
  const playGame = function (humanChoice) {
    const cpuChoice = getComputerChoice();
    console.log(`Computer chose: ${cpuChoice}`);

    const resultMessage = playRound(humanChoice, cpuChoice);
    result.textContent = resultMessage; // Display result in the HTML
    updateScoreDisplay(); // Update the score display after each round

    declareWinner(); // Check for a winner after updating the score
  };
  playGame(humanChoice); // Start the game with the selected human choice
});
