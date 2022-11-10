// starting etch a sketch project - 11.10.22

// create a div within container
// create element -> the div
// append into container

const mainContainer = document.getElementById('container');

const aDiv = document.createElement('div');
aDiv.setAttribute('id', 'divSq');

mainContainer.appendChild(aDiv);