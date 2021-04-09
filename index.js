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

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection - computerSelection === -1 || playerSelection - computerSelection  === 2) {
        return `You won!`;
    } else if (playerSelection - computerSelection === 1 || playerSelection -  computerSelection === -2) {
        return `You lose!`;
    } else {
        return `It's a tie`;
    }
}

console.log(playRound(0, computerPlay()));