let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
    if(computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let convertedHumanChoice = humanChoice.toLowerCase();

    if ((humanChoice == "rock" && computerChoice == "rock") || 
        (humanChoice == "paper" && computerChoice == "paper") || 
        (humanChoice == "scissors" && computerChoice == "scissors")) {
            return "Tie! You chose " + humanChoice + " and the computer chose " + computerChoice + ". ";
        }
}
