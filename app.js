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

// create new div
function addDiv() {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id','newDiv');
    mainContainer.appendChild(newDiv);
}