let player;
let computer;
let characterDisplay = function (image, canYouSeeIt) {
  image.style.display = canYouSeeIt;
};
// code that will populate a character when the player clicks on the buttons.
const dragonButton = document.getElementById("dragon");
const dragonRight = document.getElementById("dragonFacingRight");
dragonButton.addEventListener("click", () => {
  characterDisplay(dragonRight, "block");
  characterDisplay(knightRight, "none");
  characterDisplay(princessRight, "none");
});

const knightButton = document.getElementById("knight");
const knightRight = document.getElementById("knightRight");
knightButton.addEventListener("click", () => {
  characterDisplay(knightRight, "block");
  characterDisplay(dragonRight, "none");
  characterDisplay(princessRight, "none");
});

const princessButton = document.getElementById("princess");
const princessRight = document.getElementById("princessRight");
princessButton.addEventListener("click", () => {
  characterDisplay(princessRight, "block");
  characterDisplay(knightRight, "none");
  characterDisplay(dragonRight, "none");
});

//adding click event to buttons in order to play the game

const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerPick();
    result();
  })
);

//the function that runs the math random method for the computer pick

function computerPick() {
  let random = Math.random();
  if (random < 0.34) {
    computer = "Dragon";
    dragonComputerImage(dragonFacingLeft);
  } else if (random <= 0.67) {
    computer = "Knight";
    knightComputerImage(knightLeft);
  } else {
    computer = "Princess";
    princessComputerImage(princessLeft);
  }
  console.log("Computer: ", computer);
}

// function to generate computer image
function dragonComputerImage(dragonFacingLeft) {
  const dragonComputer = document.getElementById("#dragonFacingLeft");
  characterDisplay(dragonFacingLeft, "block");
  characterDisplay(knightLeft, "none");
  characterDisplay(princessLeft, "none");
}

function knightComputerImage(knightLeft) {
  const knightComputer = document.getElementById("#knightLeft");
  characterDisplay(knightLeft, "block");
  characterDisplay(dragonFacingLeft, "none");
  characterDisplay(princessLeft, "none");
}

function princessComputerImage(princessLeft) {
  const princessComputer = document.getElementById("#princessLeft");
  characterDisplay(princessLeft, "block");
  characterDisplay(knightLeft, "none");
  characterDisplay(dragonFacingLeft, "none");
}

//Game Logic: the function that compares the choices and  prodduce winner statement

let displayResult = function (message) {
  document.getElementById("result").innerHTML = message;
};
let player1Wins = "Player 1 wins!";
let computerWins = "The Computer wins!";
let ties = 0;
let wins = 0;
let loss = 0;
function result() {
  if (player === computer) {
    displayResult("The result is a tie!");
    ties++;
    document.querySelector(".ties").textContent = ties;
  } else if (player === "Dragon") {
    if (computer === "Princess") {
      displayResult(player1Wins);
      wins++;
      document.querySelector(".wins").textContent = wins;
    } else if (computer === "Knight") {
      displayResult(computerWins);
      loss++;
      document.querySelector(".losses").textContent = loss;
    }
  } else if (player === "Princess") {
    if (computer === "Knight") {
      displayResult(player1Wins);
      wins++;
      document.querySelector(".wins").textContent = wins;
    } else if (computer === "Dragon") {
      displayResult(computerWins);
      loss++;
      document.querySelector(".losses").textContent = loss;
    }
  } else if (player === "Knight") {
    if (computer === "Dragon") {
      displayResult(player1Wins);
      wins++;
      document.querySelector(".wins").textContent = wins;
    } else if (computer === "Princess") {
      displayResult(computerWins);
      loss++;
      document.querySelector(".losses").textContent = loss;
    }
  }
}
