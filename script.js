let humanScore = 0;
let computerScore = 0;
let userMove = "";
let computerMove = "";

function getMoves(event) {
  const button = event.currentTarget;
  switch (button.id) {
    case "rock":
      userMove = "rock";
      break;

    case "paper":
      userMove = "paper";
      break;

    case "scissors":
      userMove = "scissors";
      break;
  }

  computerMove = getComputerChoice();
  console.log("User chose:", userMove);
  console.log("Computer chose:", computerMove);

  playRound();
}

function getComputerChoice() {
  const indicator = Math.floor(Math.random() * 3);

  if (indicator === 0) {
    return "rock";
  } else if (indicator === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", getMoves);
});

buttons.forEach((button) => {
  button.addEventListener("mouseenter", (event) => {
    const button = event.currentTarget;
    let img = button.querySelector("img");
    switch (button.id) {
      case "rock":
        img.src = "assets/rock-hover.png";
        break;

      case "paper":
        img.src = "assets/paper-hover.png";
        break;

      case "scissors":
        img.src = "assets/scissors-hover.png";
        break;
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseleave", (event) => {
    const button = event.currentTarget;
    let img = button.querySelector("img");
    switch (button.id) {
      case "rock":
        img.src = "assets/rock.png";
        break;

      case "paper":
        img.src = "assets/paper.png";
        break;

      case "scissors":
        img.src = "assets/scissors.png";
        break;
    }
  });
});

const displayTitleRemark = document.getElementById("title");
const displayDescriptionRemark = document.getElementById("description");
const displayHumanScore = document.getElementById("human-score");
const displayComputerScore = document.getElementById("computer-score");
const displayResult = document.getElementById("results");
const displayModal = document.getElementById("modal");
const restartButton = document.getElementById("restart");
const remark = document.getElementById("remark");
const overlay = document.getElementById("overlay");

function determineWinner() {
  if (userMove === computerMove) {
    displayTitleRemark.textContent = "It's a tie!";
    displayDescriptionRemark.textContent =
      userMove + " doesn't beat " + computerMove;
  } else if (
    (userMove === "rock" && computerMove === "scissors") ||
    (userMove === "paper" && computerMove === "rock") ||
    (userMove === "scissors" && computerMove === "paper")
  ) {
    humanScore++;
    displayTitleRemark.textContent = "You win!";
    displayDescriptionRemark.textContent = userMove + " beats " + computerMove;
  } else {
    computerScore++;
    displayTitleRemark.textContent = "Computer wins!";
    displayDescriptionRemark.textContent = computerMove + " beats " + userMove;
  }
}

function playRound() {
  determineWinner();
  displayHumanScore.textContent = ` ${humanScore}`;
  displayComputerScore.textContent = ` ${computerScore}`;
  if (humanScore === 5 || computerScore === 5) {
    displayModal.style.display = "flex";
    overlay.style.display = "flex";

    if (humanScore === 5) {
      remark.textContent = "You won the game!";
    } else {
      remark.textContent = "Computer won the game!";
    }
  }
}

restartButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;

  displayHumanScore.textContent = humanScore;
  displayComputerScore.textContent = computerScore;

  displayModal.style.display = "none";
  overlay.style.display = "none";

  displayTitleRemark.textContent = "Ready, set, play!";
  displayDescriptionRemark.textContent =
      "Reach 5 points before your opponent to win.";
});