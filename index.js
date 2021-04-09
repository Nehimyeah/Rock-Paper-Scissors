const choices = ['Rock', 'Paper', 'Scissors'];

const computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
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