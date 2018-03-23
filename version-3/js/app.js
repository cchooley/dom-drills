
var drawGrid = document.getElementById('paintBoard');
var drawPalette = document.getElementById('paletteBoard');

createCanvas();
createPalette();

function createCanvas() {
  for (var i = 0; i < 560; i++) {
    var newDiv = document.createElement('div');
    newDiv.classList.add('paintSquare');
    drawGrid.appendChild(newDiv);
    newDiv.addEventListener('click', function setColor(target) {
      event.target.style.backgroundColor = document.querySelector('.colorSelect').style.backgroundColor;
    })
  }
}

function createPalette() {
  for (var i = 0; i < 10; i++) {
    var newDiv = document.createElement('div');
    newDiv.id = i;
    newDiv.classList.add('paletteColor');
    if (newDiv.id === "0") {
      newDiv.style.backgroundColor = 'red';
    } else if (newDiv.id ===  "1") {
      newDiv.style.backgroundColor = 'blue';
    } else if (newDiv.id === "2") {
      newDiv.style.backgroundColor = 'yellow';
    } else if (newDiv.id === "3") {
      newDiv.style.backgroundColor = 'grey';
    } else if (newDiv.id === "4") {
      newDiv.style.backgroundColor = 'brown';
    } else if (newDiv.id === "5") {
      newDiv.style.backgroundColor = 'black';
    } else if (newDiv.id === "6") {
      newDiv.style.backgroundColor = 'purple';
    } else if (newDiv.id === "7") {
      newDiv.style.backgroundColor = 'green';
    } else if (newDiv.id === "8"){
      newDiv.style.backgroundColor = 'white';
    } else {
      newDiv.classList.add('colorSelect');
    }

    drawPalette.appendChild(newDiv);

    newDiv.addEventListener('click', function getColor(target) {
      document.querySelector('.colorSelect').style.backgroundColor = event.target.style.backgroundColor;
    })
  }
}
