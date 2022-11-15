// starting etch a sketch project - 11.10.22

// create a div within container
// create element -> the div
// append into container

// create main container
const mainContainer = document.getElementById('container');

// create div inside container
const aDiv = document.createElement('div');
aDiv.setAttribute('id', 'divSq');
mainContainer.appendChild(aDiv);

// create button to add new div inside main container
const button = document.getElementById('button');
button.addEventListener('click', addDiv);

// create a 16 row grid
function addDiv() {
    let rowMax = 16;
    for (let i = 0; i < rowMax.length; i++) {
        const newDiv = document.createElement('div');
        newDiv[i].setAttribute('id','newDiv');
        mainContainer.appendChild(newDiv[i]);
        newDiv[i].textContent = 'hi';
    }
}