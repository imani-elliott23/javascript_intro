
const secretNumber = Math.floor(Math.random() * 100) + 1;
let currentScore = 10;
let historyHighScore = 0;

document.getElementById('checkButton').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guessInput').value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('message').innerText = 'Please enter a valid number between 1 and 100.';
    } else {
        if (guess === secretNumber) {
            // Handle correct guess
        } else {
            // Handle incorrect guess
        }
    }
});
