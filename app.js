// starting etch a sketch project - 11.10.22

// create main container
const mainContainer = document.getElementById('container');

// create a 16 x 16 grid
let num = 16;

// style grid cols
mainContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

// iterate num of divs
for (let i = 0; i < num * num; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', 'newDiv');
    container.appendChild(square);
}

// querySelectorAll divs to place into an html collection
const allNewDivs = document.querySelectorAll('#newDiv');

// run a function through each of the elements within the collection
// to change the color of each element
allNewDivs.forEach(function (element) {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = '#522d89';
    });
});

// create a button that will prompt user for integer
// single number input representing a different grid size num x num
// we can use an onclick event within the button or
// create an addEventListener for the click
// within the function: prompt the user for single number
// use input to be referenced into the above if statement
// to create an appropriate set of newDiv's within the same mainContainer