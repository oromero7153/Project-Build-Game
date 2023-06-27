// code that will populate a character when the player clicks on the buttons. 

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

function test(){
    const buttons = document.querySelectorAll(".buttons")
        let player1;
        let computer;

    buttons.forEach(button => button.addEventListener("click", () => {
        player1 = button.textContent;
        computerPick();
        result();
    } ))
} console.log(test())
//the function that runs the math random for the computer pick
    function computerPick(){
    let computer = Math.random();
      if (computer < 0.34) {
    computer = "dragon";
         } else if (computer <= 0.67) {
    computer = "knight";
         } else {
    computer = "princess";
    }
};
//the function that compares the choices
function result(){
    if(player1===computer){
        return "The result is a tie!";
    }
    else if(player1==="dragon"){
        if(computer==="princess"){
            return "Player 1 Wins!"
        }
        else if(player1==="knight"){
            return "The Computer Wins";
        }
    }
    else if(player1==="princess"){
        if(computer==="knight"){
            return "Player 1 Wins"
        }
        else if(player1==="dragon"){
            return "The Computer Wins";
        }
    }
    else if(player1==="knight"){
        if(computer==="dragon"){
            return "Player 1 Wins"
        }
        else if(computer==="princess"){
            return "The Computer Wins";
        }
    }    
}
//console.log(test())
 


// function that triggers winning player with phrase that says "... wins!"