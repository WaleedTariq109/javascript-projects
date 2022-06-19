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
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let state = 20;
let highScoreState = 0;

// Event Listners
chechBtn.addEventListener('click', matchScore);
againBtn.addEventListener('click', reset);

// Helper Functions
function checkScoreState(msg) {
  if (state > 1) {
    displayMessage(msg);
    state--;
    score.textContent = state;
  } else {
    displayMessage('💣 You Lost');
  }
}

function matchScore() {
  const guessNumber = Number(guess.value);
  if (!guessNumber) {
    displayMessage('No Number ⛔');
  } else if (guessNumber === randomNumber) {
    displayMessage('🎉 Correct Guess');
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = randomNumber;
    if (state > highScoreState) {
      highScoreState = state;
      highScore.textContent = highScoreState;
    }
  } else if (guessNumber > randomNumber) {
    checkScoreState('↗ Too High');
  } else if (guessNumber < randomNumber) {
    checkScoreState('↙ Too Low');
  }
}

function displayMessage(msg) {
  message.textContent = msg;
}

function reset() {
  state = 20;
  score.textContent = state;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = '?';
  displayMessage('Start guessing...');
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  guess.value = '';
}
