var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];


var ticTacToe = document.getElementById('gameboard');


function createGame() { // populate #gameboard with board array.

  for (var i = 0; i < board.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.id = i;
    newDiv.classList.add('square');
    if (newDiv.id === "0" || newDiv.id === "1" || newDiv.id === "3" || newDiv.id === "4") {
      newDiv.classList.add('r-border', 'b-border')
    } else if (newDiv.id === "2" || newDiv.id === "5") {
      newDiv.classList.add('b-border')
    } else if (newDiv.id === "6" || newDiv.id === "7") {
      newDiv.classList.add('r-border')
    }
    ticTacToe.appendChild(newDiv);
    addClickListener(newDiv);
    console.log(newDiv)
  }
}

createGame()

var getMessage = document.querySelector('.message');

function displayMessage(text) {
  if (text === "" || text === null || text === undefined) {
    getMessage.innerText = "Current Player: " + currentPlayer;
  } else {
  getMessage.innerText = text;
  }
}

function changeMessage() {
  getMessage.classList.add('end-message')
}

function makeMove(square, index) {
  square.innerHTML = currentPlayer;
  board[index] = currentPlayer;
}
