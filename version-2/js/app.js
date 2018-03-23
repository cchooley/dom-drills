// Objectives
// - Break down a problem into its parts
// - Identify the technical tools we'll need to accomplish those steps
// - Do it
// - Identify pain point

// User-story-style approach: As a user, when I click a button, I need the number that I press
// to show up on the screen

  // add an event listener - done
  // find the text inside the button - done
  // display the text in the screen

  //targetElement,addEventListener('click', function)
  //button.addEventListener('click', function () {
    //take text out of buttons
    //add to screen
  //})


// select the screen & assign to variable w/ getElement
var screen = document.getElementById('screen')

function clickResponse(event) {
  var addToScreen = event.target.innerText
  if (addToScreen === '=') {
  // += addToScreen to screen element
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

// As a user, when I click an operator, I need that to display on the screen
// As a user, when I click equals, I need the math to happen, correctly
  // string w/ 2 numbers & an operator into 2 actual numbers and an operator
  // when a user clicks a button, put that # in an array
  // when they click an operator, save that as a variable
    // make a new array and put the next # in that
  // select the = button
  // add eventListener to =
    // string w/ 2 numbers and an operator into 2 actual numbers and an operator
    // eval
  // display total of evaluation function in screen
// As a user, when I click clear, I need the screen to empty

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
  screen.innerText = '';
})
