//Global scores
let scores = {
  player: 0,
  computer: 0
}

//Create a computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)

  if (randomNumber == 0) {
    return 'rock'
  } else if (randomNumber == 1) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

//Play a round and display message
  //If player choice beats computer choice: win
  //Else: lose
function playRound(playerChoice, computerChoice = getComputerChoice()) {
  playerChoice = playerChoice.toLowerCase()

  if (drawConditions(playerChoice, computerChoice)) {
    return `Draw! You both picked ${firstCapital(playerChoice)}`

  } else if (winConditions(playerChoice, computerChoice)) {
    winCount('player')
    return `You win! ${firstCapital(playerChoice)} beats ` + 
            firstCapital(computerChoice)

  } else {
    winCount('computer')
    return `You lose! ${firstCapital(playerChoice)} is beaten by ` +
            firstCapital(computerChoice)
  }
}

//True if there is a draw
function drawConditions(playerChoice, computerChoice) {
  return playerChoice == computerChoice ? true : false
}

//True if player wins
function winConditions(playerChoice, computerChoice) {
  let pc = playerChoice
  let cc = computerChoice
  
  return (pc == 'rock' && cc == 'scissors') || 
         (pc == 'paper' && cc == 'rock') || 
         (pc == 'scissors' && cc == 'paper')
}

//Capitalizes the first letter of the inputted string
function firstCapital(string) {
  return string[0].toUpperCase() + string.substring(1)
}

//Plays the actual game as 5 rounds. Prompts the user for a choice and compares
//to the computer choice. Keeps the score and decides a winner at the end
function game() {
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt('Choose rock, paper or scissors')
    console.log(playRound(playerChoice))
  }
  console.log(endMessage())
  winCount('reset')
}

//Takes in different commands to increase the win count or reset to zero
function winCount(command) {
  if (command == 'player') {
    scores.player++;
  } else if (command == 'computer') {
    scores.computer++;
  } else if (command == 'reset') {
    scores.player = 0;
    scores.computer = 0;
  }
}

//Prints an end message to the console on who won and the score
function endMessage() {
  let result = scores.player > scores.computer ? 'won' : 
               scores.player < scores.computer ? 'lost' : 'drew'

  return `You ${result} ${scores.player} to ${scores.computer}`
}