'use strict';

// Random number generator 
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Click Event functionality 
document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log( typeof guess);


// When there is no guess 
  if(!guess) {
    document.querySelector('.message').textContent = 'No Number!';

// When player wins 
  }else if (guess === secretNumber){
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    // Change css style 
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // High Score functionality 
    if (score > highScore ){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    
// When guess is too high 

// When guess is wrong 
  }else if(guess !== secretNumber) {
     if(score > 0){
      document.querySelector('.message').textContent = guess > secretNumber ? 'Guess is too high! Number should be between 1 - 20':  'Guess is too low! Number should be between 1 - 20';
    score--;
    document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = 'Game Over';
    }
  // }else if (guess > secretNumber){
   
 // When guess is too low 
  // }else if (guess < secretNumber){
  //   if(score > 0){
  //     document.querySelector('.message').textContent = 'Guess is too low! Number should be between 1 - 20';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   }else{
  //     document.querySelector('.message').textContent = 'Game Over';
  //   }
  // }
  }
})

// click event functionality for reset button 

document.querySelector('.again').addEventListener('click', function() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})

