/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Paper'
// getComputerChoice() 👉 'Scissors'

// function getComputerChoice() {
const getComputerChoice = () => {
  let rpsChoices = ['Rock', 'Paper', 'Scissors']
  // let computerChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)]
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
  return computerChoice
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0

// function getResult(playerChoice, computerChoice) {
const getResult = (playerChoice, computerChoice) => {
  // return the result of score based on if you won, drew, or lost
  
  let score = 0

  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0
  }
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  }
  // Otherwise human loses (aka set score to -1)
  else {
    score = -1
  }
  // return score
  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**

// function showResult(score, playerChoice, computerChoice) {
const showResult = (score, playerChoice, computerChoice) => {

  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  let result = document.getElementById('result')

  switch (score) {
    case -1:
      result.innerText = `You Loose!`
      break;
    case 0:
      result.innerText = `It's a Draw!`
      break;
    case 1:
      result.innerText = `You Won`
      break;
  }

  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText = `${Number(playerScore.innerText) + score}`
  hands.innerText = `👦 ${playerChoice} vs 🤖 ${computerChoice}`
}

// ** Calculate who won and show it on the screen **

// function onClickRPS(playerChoice) {
const onClickRPS = (playerChoice) => {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **

// function playGame() {
const playGame = () => {
  // use querySelector to select all RPS Buttons
  let rpsButtons = document.querySelectorAll('.rpsButton')    // THis query will get the values of the buttons 

  // rpsButtons[0].onclick =() => console.log(rpsButtons[0].value) o/p:- Rock

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  rpsButtons.forEach(rpsButtons => {
    rpsButtons.onclick = () => onClickRPS(rpsButtons.value)
  })

  // Add a click listener to the end game button that runs the endGame() function on click

  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
  
}

// ** endGame function clears all the text on the DOM **

// function endGame() {
const endGame = () => {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()