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

//Get input for player choice

//Play a round and display message
  //If player choice beats computer choice: win
  //Else: lose
function playRound(playerChoice, computerChoice = getComputerChoice()) {
  playerChoice = playerChoice.toLowerCase()

  if (drawConditions(playerChoice, computerChoice)) {
    return `Draw! You both picked ${firstCapital(playerChoice)}`

  } else if (winConditions(playerChoice, computerChoice)) {
    return `You win! ${firstCapital(playerChoice)} beats ` + 
    firstCapital(computerChoice)

  } else {
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