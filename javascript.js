// Create a new function getComputerChoice

// initialize new variables humanScore and computerScore with 0

let humanScore = 0;
let computerScore = 0;

 
function getComputerChoice() {
    
    
    
    
    let result = Math.floor(Math.random() * 3) // result be a random number, 0, 1 or 2

    if (result === 0) { // if result is 0 print this if 1 print this or if 2 pring that
        console.log("rock")
    } else if (result === 1) {
        console.log("paper")
    } else if (result === 2) {
        console.log("scissors")
    } else {
        console.log("Couldnt return any value")
    }
        
    
    
}

 // call the function

// Create a new function getHumanChoice 

// prompt the user

function getHumanChoice() {
    let question = prompt("What would you like to choose? Rock Paper or Scissors: ")

// Ask in a prompt wether the user chooses rock, paper or scissors
        // use an if statement

// make the function return what the user said 


    if (question === "rock") {
        return "rock"
    } else if (question === "paper") {
        return "paper"

    } else if (question === "scissors") {
        return "scissors"
    } else {
        return "Invalid value, please try again."
    }
}





// logic to play a round

function playRound() {
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();




