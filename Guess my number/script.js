'use strict';

// Selecting HTML Elements
const number = document.querySelector('.number');
const chechBtn = document.querySelector('.check');
const message = document.querySelector('.message');

// Generate Random number between 1 to 20
const randomNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = randomNumber;
