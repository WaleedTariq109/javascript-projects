'use strict';

// Selecting HTML Elements
const body = document.querySelector('body');
const number = document.querySelector('.number');
const chechBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const message = document.querySelector('.message');
const guess = document.querySelector('.guess');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

// Generate Random number between 1 to 20
const randomNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = randomNumber;
let state = 20;

chechBtn.addEventListener('click', function () {
  const guessNumber = Number(guess.value);
  if (!guessNumber) {
    message.textContent = 'No Number ⛔';
  } else if (guessNumber === randomNumber) {
    message.textContent = '🎉 Correct Guess';
    body.style.backgroundColor = '#60b347';
    highScore.textContent = state;
  } else if (guessNumber > randomNumber) {
    if (state > 1) {
      message.textContent = '↗ Too High';
      state--;
      score.textContent = state;
    } else {
      message.textContent = '💣 You Lost';
    }
  } else if (guessNumber < randomNumber) {
    if (state > 1) {
      message.textContent = '↙ Too Low';
      state--;
      score.textContent = state;
    } else {
      message.textContent = '💣 You Lost';
    }
  }
});
