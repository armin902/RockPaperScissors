
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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    let convertedHumanChoice = humanChoice.toLowerCase();

    if ((humanChoice == "rock" && computerChoice == "rock") || 
        (humanChoice == "paper" && computerChoice == "paper") || 
        (humanChoice == "scissors" && computerChoice == "scissors")) {
            console.log("Tie! You chose " + humanChoice + " and the computer chose " + computerChoice + ". ");
        } else if ((humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            computerScore++;
        } else {
            console.log("You win! " + humanChoice + " beats " + computerChoice + "."); 
            humanScore++;
        }
        }
    

    if(humanScore === computerScore) {
        console.log("Tie! You: " + humanScore + " | Computer: " + computerScore);
    } else if (humanScore > computerScore) {
        console.log("You win! You: " + humanScore + " | Computer: " + computerScore);
    } else {
        console.log("You lose. You: " + humanScore + " | Computer: " + computerScore);s
    }
}


playGame();

const btnContainer = document.createElement("div");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");


btnContainer.classList.add("buttonsContainer");
rockBtn.classList.add("buttons");
paperBtn.classList.add("buttons");
scissorsBtn.classList.add("buttons");

btnContainer.appendChild(rockBtn);
btnContainer.appendChild(paperBtn);
btnContainer.appendChild(scissorsBtn);

document.appendChild(btnContainer);

rockBtn.addEventListener("click", (event) => { 
    playRound();
});

paperBtn.addEventListener("click", (event) => { 
    playRound();
});

scissorsBtn.addEventListener("click", (event) => { 
    playRound();
});
