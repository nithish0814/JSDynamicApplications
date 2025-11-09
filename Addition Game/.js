let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");
let checkButton = document.getElementById("checkButton");
let restartButton = document.getElementById("restartButton");

function getRandomNumber() {
    return Math.ceil(Math.random() * 100);
}

let firstNumber = getRandomNumber();
let secondNumber = getRandomNumber();

firstNumberElement.textContent = firstNumber;
secondNumberElement.textContent = secondNumber;

checkButton.onclick = function() {
    let userValue = parseInt(userInputElement.value);
    let sum = firstNumber + secondNumber;

    if (userValue === sum) {
        gameResultElement.textContent = "Congratulations! You got it right.";
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = "Please Try Again!";
        gameResultElement.style.backgroundColor = "#cf1124";
    }
};

restartButton.onclick = function() {
    firstNumber = getRandomNumber();
    secondNumber = getRandomNumber();
    firstNumberElement.textContent = firstNumber;
    secondNumberElement.textContent = secondNumber;
    userInputElement.value = "";
    gameResultElement.textContent = "";
    gameResultElement.style.backgroundColor = "#f5f7fa";
};
