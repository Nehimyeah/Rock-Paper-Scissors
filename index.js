/**
 * 
 * Developed by Nehemiah Amanuel Tefera
 * April 9, 2021
 * 3:04 pm Ethiopian time
 * This is a rock paper scissors game built for javascript console without userinterface.
 * It was built as part of 'The Odin Project' curriculum in which it is going to get revisited
 * later on in the course to build a more robust interface for the game.
 * 
 * I designed this game in such a way to eliminate all the if elses necessary to handle each winning
 * and losing scenario by using integer values corresponding each three choices. I have also created
 * some helper functions to interchange between words and numbers.
 * 
 * 
 */

// the choices array contain the choices according to their winning order
const choices = ['Rock', 'Paper', 'Scissors'];
let playerSelectionInWord = '';
let computerSelectionInWord = '';
let computerScore = 0, playerScore = 0;

const computerPlay = () => {
    return Math.floor(Math.random() * 3);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelectionInWord = getSelectionInWord(e.target.id);
        game();
    })
})

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
    if (playerSelection - computerSelection === 1 || playerSelection - computerSelection  === -2) {
        playerScore++;
        return `You won! ${getSelectionInWord(playerSelection)} beats ${getSelectionInWord(computerSelection)}.`;
    } else if (playerSelection - computerSelection === -1 || playerSelection -  computerSelection === 2) {
        computerScore++
        return `You lose! ${getSelectionInWord(computerSelection)} beats ${getSelectionInWord(playerSelection)}`;
    } else {
        return `It's a tie`;
    }
}

function game() {
    let computers = computerPlay();
    computerSelectionInWord = getSelectionInWord(computers);
    reportResult(playRound(getSelectionInNumber(playerSelectionInWord), computers));

    const result = document.querySelector('#winner');

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            result.innerText = `player won the total game with the score of ${playerScore} to ${computerScore}`;
        } else if (playerScore < computerScore) {
            result.innerText = `computer won the total game with the score of ${computerScore} to ${playerScore}`;
        } else {
            result.innerText = `The game is over and the score is a tie with the score of ${computerScore} to ${playerScore}`;
        }
    }
}

function reportResult(winner) {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p) => {
        switch (p.id) {
            case 'userChoice':
                p.innerHTML = `Your choice is: <strong>${playerSelectionInWord}</strong>`;
                break;
            case 'computerChoice':
                p.innerHTML = `Computer\'s choice is: <strong>${computerSelectionInWord}</strong>`;
                break;
            case 'declaration':
                p.textContent = winner;
        }
    })
}
