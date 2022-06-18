'use strict';

// Selecting HTML Elements
const body = document.querySelector('body');
const number = document.querySelector('.number');
const chechBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const guess = document.querySelector('.guess');

// Generate Random number between 1 to 20
const randomNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = randomNumber;

chechBtn.addEventListener('click', function () {
  const guessNumber = Number(guess.value);
  console.log(guessNumber === randomNumber);
  if (!guessNumber) {
    message.textContent = 'No Number ⛔';
  } else if (guessNumber === randomNumber) {
    message.textContent = '🎉 Correct Guess';
    body.style.backgroundColor = '#60b347';
  } else if (guessNumber > randomNumber) {
    message.textContent = '↗ Too High';
  } else if (guessNumber < randomNumber) {
    message.textContent = '↙ Too Low';
  }
});
