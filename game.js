//need code to generate code that will populate a character when the player clicks on the buttons. eventlistener with click event. 

const dragonButton = document.getElementById("dragon");
const dragonRight = document.getElementById("dragonFacingRight");
dragonButton.addEventListener("click", () => {
    dragonRight.style.display = "block";
});

// const knightButton = document.getElementById("knight");
// const knightRight = document.getElementById("knightRight");
// knightButton.addEventListener("click", () => {
//     knightRight.style.display = "block";
// });

// const princessButton = document.getElementById("princess");
// const princessRight = document.getElementById("princessRight");
// princessButton.addEventListener("click", () => {
//     princessRight.style.display = "block";
// });



/*let dragonCharacter = document.createElement('img')
dragonCharacter.src = 'Assets/flyingDragonRight.gif'
dragonCharacter.style.position = 'fixed'
dragonCharacter.style.left = '25%'
dragonCharacter.style.bottom = '25%'
// dragonCharacter.style.display = 'none'
document.body.append(dragonCharacter)*/

//need code that will finalize the players choice when they click the submit button and trigger the mathrandom function to generate the computer's choice.


//need a function that will generate the "rock, paper, scissors"


//after mathrandom functions triggers, the  'winning' character will animate 


// function that triggers winning player with phrase that says "... wins!"