// starting etch a sketch project - 11.10.22

// create a div within container
// create element -> the div
// append into container

// create main container
const mainContainer = document.getElementById('container');

// create button to add new div inside main container
const button = document.getElementById('button');
button.addEventListener('click', addDiv);

// create a 16 row grid
function addDiv() {
    let num = 16;

    // style grid cols
    mainContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    // iterate num of divs
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', 'newDiv');
        container.appendChild(square);
    }
};