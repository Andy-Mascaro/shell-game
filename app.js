// import functions and grab DOM elements
const ball1 = document.getElementById('ball1');
const ball2 = document.getElementById('ball2');
const ball3 = document.getElementById('ball3');

const button1 = document.getElementById('shell1-button');


const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementByUd('total');

let wins = 0;
let total = 0;


// set event listeners 

button1.addEventListener('click', ()=> {

    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('reveal');

    total++;

    const ballLocation = Math.ceil(Math.random () * 3);

    if (ballLocation === 1) {
        ball1.classList.add('reveal');
        wins++;

    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');

    } else { 
        ball3.classList.add('reveal');

    }

    winSpan.textContent = wins;
    totalSpan.testContent = total;
    lossSpan.textContent = total - wins;



});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
