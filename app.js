
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let x = Math.random();
    if (x < 1/3) {
        return "rock";
    } else if (1/3 <= x < 2/3) {
        return "scissors";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    let player = prompt("Pick Rock, Paper, or Scissors!").toLowerCase();
    if (player !== "rock" && player !== "scissors" && player !== "paper") {
        ans = prompt("Please input a valid answer. Press Y to try again. N to exit");
        if (ans === "Y") {
            getHumanChoice();
        } else {
            console.log("You have quit the game");
        }
    } else {
        return player;
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        return console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        return console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        return console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    } else if (humanChoice === computerChoice) {
        return console.log("You draw! Both you and the computer picked " + humanChoice);
    } else {
        computerScore += 1;
        return console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }
}

function playGame(n) {
    for (let i = 0; i < n; i++) {
        playRound()
    }
    console.log("The final score is Human: " + humanScore + " , Computer: " + computerScore);
}

playGame(5);