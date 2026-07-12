let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
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
        } else if ((humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
            computerScore++;
            return "You lose! " + computerChoice + " beats " + humanChoice + ".";
        } else {
            humanScore++;
            return "You win! " + humanChoice + " beats " + computerChoice + "."; 
        }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));


function playRound