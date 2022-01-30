// import functions and grab DOM elements
const ball1 = document.getElementById('ball1');
const ball2 = document.getElementById('ball2');
const ball3 = document.getElementById('ball3');

const button1 = document.getElementById('shell1-button');
const button2 = document.getElementById('shell2-button');
const button3 = document.getElementById('shell3-button');

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

let wins = 0;
let total = 0;
function reset(){

    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('reveal');
}

function display() {
    winSpan.textContent = wins;
    totalSpan.textContent = total;
    lossSpan.textContent = total - wins;
}

// set event listeners 

button1.addEventListener('click', ()=> {

    reset();

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
    display();
  



});

button2.addEventListener('click', ()=> {

    reset();

    total++;

  

    const ballLocation = Math.ceil(Math.random () * 3);

    if (ballLocation === 1) {
        ball1.classList.add('reveal');
        

    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
        wins++;

    } else { 
        ball3.classList.add('reveal');

    }

    display();



});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
button3.addEventListener('click', ()=> {

    reset();

    total++;

    

    const ballLocation = Math.ceil(Math.random () * 3);

    if (ballLocation === 1) {
        ball1.classList.add('reveal');
        

    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');

    } else { 
        ball3.classList.add('reveal');
        wins++;
    }

    display();
    



});