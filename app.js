// starting etch a sketch project - 11.10.22

// const container = document.getElementById('container');
// container.addEventListener('mouseover', mOverFunc);
// container.addEventListener('mouseout', mOutFunc);

// function mOverFunc() {
//     container.style.backgroundColor = 'green';
// }

// function mOutFunc() {
//     container.style.backgroundColor = '#d39595';
// }

// create a div within container
// create element -> the div
// append into container

const mainContainer = document.getElementById('container');

const aDiv = document.createElement('div');
aDiv.setAttribute('id', 'divSq');

mainContainer.appendChild(aDiv);