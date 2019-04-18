/**
 * GAME FUNCTION:
 * Player must guess a number between min and max
 * Player get a certain amount of guesses
 * Notify player of guesses remaining
 * Notify player of correct answer if lose
 * Let player choose to play again
 */

//  Game Value
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessLeft  = 5;


// Game UI Element
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI min and Max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', (e) => {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Listen to event
guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);


    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
   if (guess === winningNum) {
        
        // Winning message
        gameOver(true, `${winningNum} is correct, YOU WON`);
    
}else {
    // Wrong number
    guessLeft -= 1;

    if( guessLeft === 0) {

    // Winning message
        gameOver(false, `GAME OVER, YOU LOST, the correct number was ${winningNum}`);
    }else {
        // Game continues
         

         // Change border color
         guessInput.style.borderColor = 'red';

         // clear input 
         guessInput.value = '';
         
 
         // Winning message
         setMessage(`${guess} is not correct, You have ${guessLeft} guesses left`, 'red');

    }
}

});


// SayMessage function
const setMessage = (msg, color) => {
   message.style.color = color; 
   message.textContent = msg;
};

// Game over
const gameOver = (won, msg) => {
    // tenary oprator
    won === true ? color = 'green' : color = 'red';
    // Disable input button
    guessInput.disabled = 'true';

    // Change border color
    guessInput.style.borderColor = color;

    // Message color
    message.style.color = color; 

    // Winning message
    setMessage(msg);

    // play again
    guessBtn.value = 'Play Again';
    guessBtn.className   += 'play-again';
}


function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}