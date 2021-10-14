'use strict';

// document.querySelector('.message');
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 2; 

// Random number generator 
const secretNumber = Math.trunc(Math.random() * 20) + 1;



let score = 20;

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
// When guess is too high 
  }else if (guess > secretNumber){
    if(score > 0){
      document.querySelector('.message').textContent = 'Guess is too high! Number should be between 1 - 20';
    score--;
    document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = 'Game Over';
    }
 // When guess is too low 
  }else if (guess < secretNumber){
    if(score > 0){
      document.querySelector('.message').textContent = 'Guess is too low! Number should be between 1 - 20';
    score--;
    document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = 'Game Over';
    }
  }
})


