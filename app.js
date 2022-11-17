// starting etch a sketch project - 11.10.22

// create a div within container
// create element -> the div
// append into container

// create main container
const mainContainer = document.getElementById('container');

// create button to add new div inside main container
// const button = document.getElementById('button');
// button.addEventListener('click', addDiv);

// create a 16 row grid
// function addDiv() {
    let num = 16;

    // style grid cols
    mainContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    // iterate num of divs
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', 'newDiv');
        container.appendChild(square);
    }
// };

// hover effect
// add event listener -> mouseover and mouseout
// declare these adding a new class to a div
// style that new class div that have a specific change in color
// or changing the div's background color

// declare newDiv ref
const colorDiv = document.getElementById('newDiv');
colorDiv.addEventListener('mouseover', () => {
    colorDiv.style.backgroundColor = 'blue';
});

// declare changeColor function
// function changeColor(e) {
//     colorDiv.style.backgroundColor = 'blue';
// }

// do we use querySelectorAll?
// that way we can select all "newDiv"s
// this will then be an html collection and we can run an event listener
// on each newDiv within the collection

const allNewDivs = document.querySelectorAll('#newDiv');

allNewDivs.forEach(function(element) {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'blue';
    });
});

// document.addEventListener('mouseover', () => {
//     colorDiv.style.backgroundColor = 'blue';
//     allNewDivs.setAttribute('class', 'colorDiv');
// });

// function changeColor () {
   
//     allNewDivs.setAttribute('class', 'colorDiv');
// };