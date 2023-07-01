// code that will populate a character when the player clicks on the buttons. 
let player;
let computer;

const dragonButton = document.getElementById("dragon");
const dragonRight = document.getElementById("dragonFacingRight");
dragonButton.addEventListener("click", () => {
  dragonRight.style.display = "block";
  knightRight.style.display = "none";
  princessRight.style.display = "none";
});

const knightButton = document.getElementById("knight");
const knightRight = document.getElementById("knightRight");
knightButton.addEventListener("click", () => {
  knightRight.style.display = "block";
  dragonRight.style.display = "none";
  princessRight.style.display = "none";
});

const princessButton = document.getElementById("princess");
const princessRight = document.getElementById("princessRight");
princessButton.addEventListener("click", () => {
  princessRight.style.display = "block";
  knightRight.style.display = "none";
  dragonRight.style.display = "none";
});


//adding click event to buttons in order to play the game

const buttons = document.querySelectorAll(".buttons");


buttons.forEach(button =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerPick();
    result();
  }));


//the function that runs the math random for the computer pick

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
    princessLeft.style.display;
    princessComputerImage(princessLeft);
  }
  console.log("Computer: ", computer);
}
// function to generate computer image
function dragonComputerImage(dragonFacingLeft) {
  const dragonComputer = document.getElementById("#dragonFacingLeft");
  dragonFacingLeft.style.display = "block";
  princessLeft.style.display = "none";
  knightLeft.style.display = "none";
};

function knightComputerImage(knightLeft) {
  const knightComputer = document.getElementById("#knightLeft");
  knightLeft.style.display = "block";
  dragonFacingLeft.style.display = "none";
  princessLeft.style.display = "none";
};

function princessComputerImage(princessLeft) {
  const princessComputer = document.getElementById("#princessLeft");
  princessLeft.style.display = "block";
  knightLeft.style.display = "none";
  dragonFacingLeft.style.display = "none";
};



//the function that compares the choices and  prodduce winner statement

function result() {
  if (player === computer) {
    document.getElementById("result").innerHTML = "The result is a tie!";
    console.log("Result: The result is a tie!");
  } else if (player === "Dragon") {
    if (computer === "Princess") {
      document.getElementById("result").innerHTML = "Player 1 Wins!";
      console.log("Result: Player 1 Wins!");
    } else if (computer === "Knight") {
      document.getElementById("result").innerHTML = "The Computer Wins";
      console.log("Result: The Computer Wins");
    }
  } else if (player === "Princess") {
    if (computer === "Knight") {
      document.getElementById("result").innerHTML = "Player 1 Wins";
      console.log("Result: Player 1 Wins");
    } else if (computer === "Dragon") {
      document.getElementById("result").innerHTML = "The Computer Wins";
      console.log("Result: The Computer Wins");
    }
  } else if (player === "Knight") {
    if (computer === "Dragon") {
      document.getElementById("result").innerHTML = "Player 1 Wins";
      console.log("Result: Player 1 Wins");
    } else if (computer === "Princess") {
      document.getElementById("result").innerHTML = "The Computer Wins";
      console.log("Result: The Computer Wins");
    }
  }
}