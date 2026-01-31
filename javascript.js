function getComputerChoice() {
    let result = Math.floor(Math.random() * 3)

    if (result === 0) { 
        return "rock"
    } else if (result === 1) {
        return "paper"
    } else if (result === 2) {
        return "scissors"
    } else {
        console.log("Couldn't return any value")
    }
    return result;
}


function getHumanChoice() {
    let question = prompt("What would you like to choose? Rock Paper or Scissors: ").toLowerCase()
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
 
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let winner;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() === "rock" && computerChoice === "rock") {
            console.log("Draw! Rock is the same as Rock.")
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
            console.log("Computer Wins! Paper beats rock.");
            computerScore += 1
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
            console.log("Human wins! Rock beats scissors.")
            humanScore += 1
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "paper") {
            console.log("Draw! Paper is the same as paper.")
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
            console.log("Human wins! Paper beats rock.") 
            humanScore += 1
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
            console.log("Computer wins! Scissors beats paper.")
            computerScore += 1
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "scissors") {
            console.log("Draw! Scissors is the same as scissors.")
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
            console.log("Human wins! Scissors beats paper.") 
            humanScore += 1
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
            console.log("Computer wins! Rock beats scissors.")
            computerScore += 1
        }
    }
    // console.log(playRound(getHumanChoice(), getComputerChoice()));
    // console.log(playRound(getHumanChoice(), getComputerChoice()));
    // console.log(playRound(getHumanChoice(), getComputerChoice()));
    // console.log(playRound(getHumanChoice(), getComputerChoice()));
    // console.log(playRound(getHumanChoice(), getComputerChoice()));

    let finalHuman = humanScore
    let finalComputer = computerScore
    

    console.log(finalHuman + ": Final human value")
    console.log(finalComputer + ": Final computer value")
    
    if (finalHuman > finalComputer) {
        winner = "Human"
    } else if (finalComputer > finalHuman) {
        winner = "Computer"
    }

    console.log("The final result is " + humanScore, computerScore);
    console.log("The winner is, " + winner);
    return;
}
playGame();




