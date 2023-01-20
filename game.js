const prompt = require('prompt-sync')();

let genNumber, userInput;

function playGame() {
    // generate random number between 1-10
    genNumber = Math.floor(Math.random()* 10) + 1;

    // ask for user input
    userInput = prompt('Guess a number between 1 and 10 to play, or any other key to exit... ');
    userInput = parseInt(userInput);

    if (userInput <=10 && userInput >= 1) {
        checkNumber(userInput, genNumber);
    } else {
        console.log("Thank you for playing!");
    }
}

playGame();

function playAgain() {
    const replay = prompt('Type x to play again or any other key to exit... ')

    if (replay === "x") {
        playGame()
    } else {
        console.log("Thank you for playing!")
    }
}

function checkNumber(userInput, genNumber) {
    if (userInput === genNumber) {
        console.log(`You guessed correctly! Your number is ${userInput}.`); 
        playAgain();
    } else if (userInput != genNumber){
        console.log(`You guessed wrong. Your number is ${userInput} and computer number is ${genNumber}.`)
        playAgain();
    }
}
