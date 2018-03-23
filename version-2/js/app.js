var screen = document.getElementById('screen')

function clickResponse(event) {
  var addToScreen = event.target.innerText
  if (addToScreen === '=') {
    screen.innerText = screen.innerText
  } else if (addToScreen === 'x') {
    screen.innerText += '*'
  } else if (addToScreen === '÷') {
    screen.innerText += '/'
  } else {
    screen.innerText += addToScreen
  }
}

var buttons = document.getElementsByTagName('span')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickResponse)
  }

var getAnswer = document.getElementById('equals')
getAnswer.addEventListener('click', function calculate(event) {
  if (eval(screen.innerText) === Infinity) {
    screen.innerText = 'Error'
  } else {
    screen.innerText = eval(screen.innerText)
  }
})

var clearScreen = document.getElementById('clear')
clearScreen.addEventListener('click', function erase(event) {
  screen.innerText = ''
})
