'use strict';

//DOM AND DOM MANIPULATION

// console.log(document.querySelector('.message').textContent);

//the line of code above represents an example of DOM and DOM manipulation. What exactly is DOM?
//DOM stands for Document Object Model which represents all page contents objects that can be modified. They are structured representation of html documents and it allows javascript to access the html elements and styles inorder to manipulate them.
//the DOM is actually created by the browser as soon as the html loads
//The 'document' object is the main entry point to the page. We can change or create anything on the page using it.
//!!!! The DOM is not part of  the javascript language.
//DOM and DOM methods are part of the web APIs. The web APIs are like libraries that the browsers implement and that we can access from our javascript code
//DOM manipulation is making javascript interact with the html document or webpage.

//SELECTING AND MANIPULATING ELEMENTS
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳 Correct Number!!';

// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 44;

// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

//HANDLING CLICK EVENTS
//an event is a signal that something has happened in the DOM
//list of useful DOM events include mouse events, keyboard events, form element events, document events, css events
//with an event listener we can wait for a certain event to happen and then react to it

//the implementation of the secret number is done outside the handler function i.e the button because if done inside, it will produce a new secret number with every click.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//handler function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    displayMessage('🚫 No number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem ';
    //implementing the high score functionality
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😞 You lost the game!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//to implement the again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Refactoring the code
//This means to restructure the code without changing how the code works. It is done to improve the code and remove duplicate code.
