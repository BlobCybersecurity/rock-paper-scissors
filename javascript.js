// Create a new function getComputerChoice

function getComputerChoice() {
    
    
    
    
    let result = Math.floor(Math.random() * 3)

    if (result === 0) {
        console.log("rock")
    } else if (result === 1) {
        console.log("paper")
    } else if (result === 2) {
        console.log("scissors")
    } else {
        console.log("Couldnt return any value")
    }
        
    
    
}

console.log(getComputerChoice());

// Assign each of these: "rock", "paper", "scissors" a random number between 0 and 1 

// Use math.random to return one of these random strings as the getcomputer function choice