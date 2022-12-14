// starting etch a sketch project - 11.10.22

// create main container
const mainContainer = document.getElementById('container');

// set number input by user
let num;

// create event for the button to change grid size
const btn = document.getElementById('grid-button');
btn.addEventListener('click', () => {
    let userInput = parseInt(prompt('enter grid size: '));
    // take userInput to set the new grid size
    if (userInput && userInput <= 64) {
        num = userInput;
        // set column and rows for the grid template from userInput value
        mainContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        mainContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        // invoke makeDiv and colorDiv functions
        makeDiv();
        colorDiv();
        btn.disabled = true;
    } else {
        // if not an integer
        alert('enter a valid integer less than 65');
    }
});

// create new divs into grid container
function makeDiv() {
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', 'newDiv');
        container.appendChild(square);
    }
};

// place new divs to place into an node list
const allNewDivs = document.querySelectorAll('#newDiv');

// change the color of each of the divs within the node list
// when the mouse moves over it
function colorDiv() {
    const allNewDivs = document.querySelectorAll('#newDiv');
    allNewDivs.forEach(function (element) {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'grey';
        });
    });
};

// reset grid
const resetBtn = document.getElementById('reset-button');
resetBtn.addEventListener('click', () => {
    const allNewDivs = document.querySelectorAll('#newDiv');
    for (let emptyDiv of allNewDivs) {
        emptyDiv.remove();
    }
    btn.disabled = false;
});

// create button for random RGB values
const randBtn = document.getElementById('random-button');
randBtn.addEventListener('click', () => {
    const allNewDivs = document.querySelectorAll('#newDiv');
    for (let noColorDiv of allNewDivs) {
        noColorDiv.style.backgroundColor = 'white';
    }
    allNewDivs.forEach(function (element) {
        element.addEventListener('mouseover', () => {
            const randColor = Math.floor(Math.random()*16777215).toString(16);
            element.style.backgroundColor = '#' + randColor;
        });
    });
    btn.disabled = true;
});