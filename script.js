// Rock, Paper, Scissors

let humanScore = 0;
let computerScore = 0;

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

function playRound(userMove, computerMove) {
  let result;

  console.log(`\nYou chose ${userMove}.`);
  console.log(`The computer chose ${computerMove}.\n`);

  if (userMove === computerMove) {
    result = "It's a tie!";
  } else if (
    (userMove === "rock" && computerMove === "scissors") ||
    (userMove === "paper" && computerMove === "rock") ||
    (userMove === "scissors" && computerMove === "paper")
  ) {
    humanScore++;
    result = "You win! " + userMove + " beats " + computerMove;
  } else {
    computerScore++;
    result = "You lose! " + computerMove + " beats " + userMove;
  }

  return result;
}

function playGame() {
  console.log(`
        Welcome to Rock, Paper, Scissors!
        Choose one:
        - rock
        - paper
        - scissors
        `);

  for (let rounds = 0; rounds < 5; rounds++) {
    let userMove = prompt("What is your move?");

    if (!userMove) {
      console.log("Game cancelled.");
      return;
    }

    userMove = userMove.toLowerCase();

    if (
      !(userMove === "rock" || userMove === "paper" || userMove === "scissors")
    ) {
      console.log("Please enter a valid move. Try again!");
      continue;
    }

    const computerMove = getComputerChoice();

    const result = playRound(userMove, computerMove);
    console.log(result);

    console.log(`
            Scoreboard:
            Human    : ${humanScore}
            Computer : ${computerScore}
          `);
  }

  console.log("GAME OVER");
  console.log(`
            Final Scoreboard:
            Human    : ${humanScore}
            Computer : ${computerScore}
          \n`);

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();
