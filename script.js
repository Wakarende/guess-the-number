'use strict';

// document.querySelector('.message');
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 2; 

// Random number generator 
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;


let score = 20;

// Click Event functionality 
document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log( typeof guess);

  if(!guess) {
    document.querySelector('.message').textContent = 'No Number!';
    // When player wins 
  }else if (guess === secretNumber){
    document.querySelector('.message').textContent = 'Correct Number!';
  }else if (guess > secretNumber){
    if(score > 0){
      document.querySelector('.message').textContent = 'Guess is too high! Number should be between 1 - 20';
    score--;
    document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = 'Game Over';
    }
  }else if (guess < secretNumber){
    if(score > 0){
      document.querySelector('.message').textContent = 'Guess is too high! Number should be between 1 - 20';
    score--;
    document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = 'Game Over';
    }
  }
})


