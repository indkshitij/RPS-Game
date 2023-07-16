let userScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let result = document.getElementById("result");
let restart = document.getElementById("restart");
let block = document.querySelectorAll(".block");
let userChoiceDisplay = document.getElementById("userChoiceDisplay");
let computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
let rockBtnChoice = document.getElementById("rockBtnChoice");
let paperBtnChoice = document.getElementById("paperBtnChoice");
let scissorBtnChoice = document.getElementById("scissorBtnChoice");
let rockCompBtnChoice = document.getElementById("rockCompBtnChoice");
let paperCompBtnChoice = document.getElementById("paperCompBtnChoice");
let scissorCompBtnChoice = document.getElementById("scissorCompBtnChoice");
let scoreView = document.getElementById("scoreView")
// SCOREBOARD
const totalscore = { computerScore: 0, playerScore: 0 };

// COMPUTER CHOICE
function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  computerChoice = rpsChoice[randomNumber];
  console.log(`Computer Choice: ${computerChoice}`);
  // Computer Choice Display
  if (computerChoice == "Rock") {
    rockCompBtnChoice.style.display = "block";
    paperCompBtnChoice.style.display = "none";
    scissorCompBtnChoice.style.display = "none";
  } else if (computerChoice == "Paper") {
    paperCompBtnChoice.style.display = "block";
    rockCompBtnChoice.style.display = "none";
    scissorCompBtnChoice.style.display = "none";
  } else if (computerChoice == "Scissor") {
    scissorCompBtnChoice.style.display = "block";
    rockCompBtnChoice.style.display = "none";
    paperCompBtnChoice.style.display = "none";
  } else {
    scissorCompBtnChoice.style.display = "none";
    rockCompBtnChoice.style.display = "none";
    paperCompBtnChoice.style.display = "none";
  }

  return rpsChoice[randomNumber];
}

// SHOW RESULT
function showResult(score, playerChoice, computerChoice) {
  if (score == -1) {
    result.innerHTML = "You Lose !!";
  } else if (score == 0) {
    result.innerHTML = "Its A Tie !!";
  } else {
    result.innerHTML = "You Won !!";
  }

  scoreView.style.visibility="visible"
  userScore.innerHTML = parseInt(totalscore["playerScore"]);
  computerScore.innerHTML = parseInt(Math.abs(totalscore["computerScore"]));
}

// SCORE DECLERATION
function getResult(playerChoice, computerChoice) {
  let score;
  // Tie
  if (playerChoice == computerChoice) {
    score = 0;
  }
  // Human Wins
  else if (playerChoice == "Rock" && computerChoice == "Scissor") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissor" && computerChoice == "Paper") {
    score = 1;
  }
  // Human Loses
  else {
    score = -1;
  }
  return score;
}

// FINAL CODE

// CLICK FUNCTION TO START GAME
function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  if (score === 1) {
    totalscore["playerScore"] += 1;
  } else if (score === -1) {
    totalscore["computerScore"] -= -1;
  }
  console.log({ score });
  console.log(totalscore);
  // Calling Function
  showResult(score, playerChoice, computerChoice);
}
//   START GAME
function playGame() {
  block.forEach((block) => {
    block.onclick = () => {
      console.log(`User Choice: ${block.value}`);
      onClickRPS(block.value);
      // Paper Choice Display
      if (block.value == "Rock") {
        rockBtnChoice.style.display = "block";
        paperBtnChoice.style.display = "none";
        scissorBtnChoice.style.display = "none";
      } else if (block.value == "Paper") {
        paperBtnChoice.style.display = "block";
        rockBtnChoice.style.display = "none";
        scissorBtnChoice.style.display = "none";
      } else if (block.value == "Scissor") {
        scissorBtnChoice.style.display = "block";
        rockBtnChoice.style.display = "none";
        paperBtnChoice.style.display = "none";
      }
    };
  });
}
// Calling Function
playGame();

function playAgain() {
  totalscore["playerScore"] = 0;
  totalscore["computerScore"] = 0;

  userScore.innerHTML = "0";
  computerScore.innerHTML = "0";
  rockBtnChoice.style.display = "none";
  paperBtnChoice.style.display = "none";
  scissorBtnChoice.style.display = "none";
  result.innerHTML = "";
  rockCompBtnChoice.style.display = "none";
  paperCompBtnChoice.style.display = "none";
  scissorCompBtnChoice.style.display = "none";
  
  scoreView.style.visibility="hidden"
}

restart.onclick = () => playAgain();
