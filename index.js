const choices = ['Rock', 'Paper', 'Scissors'];
let playerSelectionInWord = '';
let computerScore = 0, playerScore = 0;

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
        playerScore++;
        return `You won! ${getSelectionInWord(playerSelection)} beats ${getSelectionInWord(computerSelection)}.`;
    } else if (playerSelection - computerSelection === 1 || playerSelection -  computerSelection === -2) {
        computerScore++
        return `You lose! ${getSelectionInWord(computerSelection)} beats ${getSelectionInWord(playerSelection)}`;
    } else {
        return `It's a tie`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        getPlayerChoice();
        let computers = computerPlay();
        console.log(playRound(getSelectionInNumber(playerSelectionInWord), computers));
    }

    if (playerScore > computerScore) {
        console.log(`player won the total game with the score of ${playerScore} to ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`computer won the total game with the score of ${computerScore} to ${playerScore}`);
    } else {
        console.log(`The game is over and the score is a tie with the score of ${computerScore} to ${playerScore}`);
    }
}

game();