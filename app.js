// starting etch a sketch project - 11.10.22

// create main container
const mainContainer = document.getElementById('container');

// create a 16 x 16 grid
let num;

// style grid cols
// mainContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

// create div function to iterate num of divs
function makeDiv() {
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', 'newDiv');
        container.appendChild(square);
    }
};

// querySelectorAll divs to place into an html collection
const allNewDivs = document.querySelectorAll('#newDiv');

// run a function through each of the elements within the collection
// to change the color of each element
function colorGrid() {
    const allNewDivs = document.querySelectorAll('#newDiv');
    allNewDivs.forEach(function (element) {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = '#FF7474';
        });
    });
};

// create event for the button to change grid size
const btn = document.getElementById('grid-button');
btn.addEventListener('click', () => {
    // set the grid template to empty
    // clearContainer();
    let userInput = parseInt(prompt('enter grid size: '));
    // take userInput to set the new grid size
    if (userInput) {
        num = userInput;
        mainContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        mainContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        makeDiv();
        colorGrid();
        console.log(num);
    } else {
        // if not an integer
        alert('enter an integer');
    }
});

// // clear container
// function clearContainer() {
//     mainContainer.style.gridTemplateColumns = 'none';
//     mainContainer.style.gridTemplateRows = 'none';
// }

// reset button
const resetBtn = document.getElementById('reset-button');
resetBtn.addEventListener('click'), () => {
    mainContainer.style.gridTemplateColumns = 'none';
    mainContainer.style.gridTemplateRows = 'none';
}