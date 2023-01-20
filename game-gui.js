
const displayMessage = document.getElementById('displayMessage');
const enterNumber = document.getElementById('userInput');
const form = document.getElementById('enterNumber');

let genNumber, userInput;
  
form.addEventListener('submit', playGame);

function playGame(event) {
    event.preventDefault();
    // generate random number between 1-10
    genNumber = Math.floor(Math.random()* 10) + 1;
    
    userInput = enterNumber.value;
    enterNumber.value = "";
    userInput = parseInt(userInput);

    if (userInput <=10 && userInput >= 1) {
        checkNumber(userInput, genNumber);
    } else {
        displayMessage.textContent = "Thank you for playing!";
    } 
}

function checkNumber(userInput, genNumber) {
    if (userInput === genNumber) {
        displayMessage.innerHTML = `<span style="color: green">You guessed correctly! </span>  Your number is ${userInput}.`; 
    } else if (userInput != genNumber){
        displayMessage.innerHTML = `<span style="color: orange">You guessed wrong.</span>  Your number is ${userInput} and computer number is ${genNumber}.`;
    }
}
