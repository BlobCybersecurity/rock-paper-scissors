
let humanScore = 0;
let computerScore = 0;
let rounds = 0;

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

 function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() === "rock" && computerChoice === "rock") {
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
            computerScore += 1
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
            humanScore += 1
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "paper") {
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
            humanScore += 1
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
            computerScore += 1
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "scissors") {
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
            humanScore += 1
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
            computerScore += 1
        }
}

function playGame() {
    let winner;
    
        
        let finalHuman = humanScore;
        let finalComputer = computerScore;

        if (finalHuman > finalComputer) {
        winner = "Human"
        } else if (finalComputer > finalHuman) {
        winner = "Computer"
        }

         const results = document.querySelector(".results")
        results.textContent = `Final Human Value: ${finalHuman} || Final Computer Value: ${finalComputer}, Winner: ${winner}`
    
    return;
}

function getResults() {
    const rock = document.querySelector(".Rock")
    const scissors = document.querySelector(".Scissors")
    const paper = document.querySelector(".Paper")
    rock.onclick = () => {
        playRound("rock", getComputerChoice())
        rounds += 1
        if (rounds === 5) {
            playGame()
        }
    }
    scissors.onclick = () => {
        playRound("scissors", getComputerChoice())
        rounds += 1
        if (rounds === 5) {
            playGame()
        }
    }
    paper.onclick = () => {
        playRound("paper", getComputerChoice())
        rounds += 1
        if (rounds === 5) {
            playGame()
        }
    }
}


 






