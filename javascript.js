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


function incrementHumScore() {
    return humanScore + 1;
}

function incrementCompScore() {
    return computerScore + 1;
}


// logic to play a round

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "rock") {
        console.log("Draw! Rock is the same as Rock.")
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        console.log("Computer Wins! Paper beats rock.");
        incrementCompScore();
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        console.log("Human wins! Rock beats scissors.")
        incrementHumScore();
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "paper") {
        console.log("Draw! Paper is the same as paper.")
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        console.log("Human wins! Paper beats rock.") 
        incrementHumScore();
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        console.log("Computer wins! Scissors beats paper.")
        incrementCompScore();
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "scissors") {
        console.log("Draw! Scissors is the same as scissors.")
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        console.log("Human wins! Scissors beats paper.") 
        incrementHumScore();
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        console.log("Computer wins! Rock beats scissors.")
        incrementCompScore();
    }
        
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();




