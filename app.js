//
const container = document.getElementById('container');
container.addEventListener('mouseover', mOverFunc);
container.addEventListener('mouseout', mOutFunc);

function mOverFunc() {
    container.style.backgroundColor = 'green';
}

function mOutFunc() {
    container.style.backgroundColor = '#d39595';
}