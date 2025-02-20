// Create a new function getComputerChoice

// initialize new variables humanScore and computerScore with 0



 
function getComputerChoice() {
    
    
    
    
    let result = Math.floor(Math.random() * 3) // result be a random number, 0, 1 or 2

    if (result === 0) { // if result is 0 print this if 1 print this or if 2 pring that
        return "rock"
    } else if (result === 1) {
        return "paper"
    } else if (result === 2) {
        return "scissors"
    } else {
        console.log("Couldnt return any value")
    }
    
    
    
    
}

/* console.log(getComputerChoice()) */



 // call the function

// Create a new function getHumanChoice 

// prompt the user

function getHumanChoice() {
    let question = prompt("What would you like to choose? Rock Paper or Scissors: ").toLowerCase()

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



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

/* console.log(humanSelection)
console.log(computerSelection) */



// create a new function playgame to play a game of 5 rounds

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function incrementHumScore() {
        
        return humanScore + 1;
    }
    
    function incrementCompScore() {
        
        return computerScore + 1;
    } 


    function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() === "rock" && computerChoice === "rock") {
            console.log("Draw! Rock is the same as Rock.")
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
            console.log("Computer Wins! Paper beats rock.");
            incrementCompScore();
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
            console.log("Human wins! Rock beats scissors.")
            incrementHumScore();
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "paper") {
            console.log("Draw! Paper is the same as paper.")
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
            console.log("Human wins! Paper beats rock.") 
            incrementHumScore();
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
            console.log("Computer wins! Scissors beats paper.")
            incrementCompScore();
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "scissors") {
            console.log("Draw! Scissors is the same as scissors.")
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
            console.log("Human wins! Scissors beats paper.") 
            incrementHumScore();
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
            console.log("Computer wins! Rock beats scissors.")
            incrementCompScore();
        }
            
        for (let rounds = 0; rounds < 5; rounds++) {
            playRound(humanSelection(), computerSelection());
        }

        
    }
}
playGame();

console.log(playGame())







