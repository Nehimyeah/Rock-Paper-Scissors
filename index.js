const choices = ['Rock', 'Paper', 'Scissors'];

const computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

console.log(computerPlay());