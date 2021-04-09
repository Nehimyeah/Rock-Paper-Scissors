const choices = ['Rock', 'Paper', 'Scissors'];
let playerSelectionInWord = '';

const computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

function getPlayerChoice() {
    do {
        playerSelectionInWord = prompt("Select from [Rock, Scissors, Paper]");
        playerSelectionInWord = clearUserInput(playerSelectionInWord);
    } while(!choices.includes(playerSelectionInWord));
}

const clearUserInput = (userInput) => {
    userInput = userInput.toLowerCase();
    userInput = `${userInput[0].toUpperCase()}${userInput.slice(1)}`;
    return userInput;
}

function getSelectionInNumber(playerSelectionInWord) {
    for (let i = 0; i < 3; i++) {
        if (choices[i] === playerSelectionInWord) {
            return i;
        }
    }
}

function getSelectionInWord(choiceInNumber) {
    return choices[choiceInNumber];
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection - computerSelection === -1 || playerSelection - computerSelection  === 2) {
        return `You won!`;
    } else if (playerSelection - computerSelection === 1 || playerSelection -  computerSelection === -2) {
        return `You lose!`;
    } else {
        return `It's a tie`;
    }
}

getPlayerChoice();

console.log(playRound(getSelectionInNumber(playerSelectionInWord), computerPlay()));