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

//Play a round
  //If player choice beats computer choice: win
  //Else: lose
