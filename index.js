const choices = ['Rock', 'Paper', 'Scissors'];

const computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const clearUserInput = (userInput) => {
    userInput = userInput.toLowerCase();
    userInput = `${userInput[0].toUpperCase()}${userInput.slice(1)}`;
    return userInput;
}

console.log(computerPlay());