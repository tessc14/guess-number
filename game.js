let genNumber, userInput; 


function playGame() {
// generate random number between 1-10
genNumber = Math.floor(Math.random()* 10) + 1;
// ask for user input

const prompt = require('prompt-sync')();
userInput = prompt('Guess a number between 1 and 10... ');
userInput = parseInt(userInput);
console.log(typeof userInput)
}
playGame();

if (userInput && typeof userInput === "number" && userInput <= 10 && userInput >=1) {
// if they match, user wins
if (userInput === genNumber) {
    console.log("You guessed correctly!")
    
} else if (userInput !== genNumber){
    console.log("You guessed wrong")

}
} else {
    console.log("Please enter a number between 1 and 10")
}


const playAgain = prompt('Type x to play again or any other key to exit')
    if (playAgain === "x") {
        playGame()
    } else {
        console.log("Thank you for playing")
    }

// if not, ask to start again?