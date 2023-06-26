//need code to generate code that will populate a character when the player clicks on the buttons. eventlistener with click event. 

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


//need code that will finalize the players choice when they click the submit button and trigger the mathrandom function to generate the computer's choice.
// let playerSelection = 
// let computerSelection = Math.random();
if (computerSelection < 0.34) {
    computerSelection = "dragon";
} else if (computerSelection <= 0.67) {
    computerSelection = "knight";
} else {
    computerSelection = "princess";
}
// const gamePlay = () => {
//     const dragonButton = document.getElementById("dragon");
//     const knightButton = document.getElementById("knight");
//     const princessButton = document.getElementById("princess");
//     const playerOptions = [dragonButton, knightButton, princessButton];

//after mathrandom functions triggers, the  'winning' character will animate 


// function that triggers winning player with phrase that says "... wins!"