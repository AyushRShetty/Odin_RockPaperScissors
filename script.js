console.log("Hi");
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function getHumanChoice() {
    let checkFlag = false;
    while (checkFlag == false) {
        let humanChoice = prompt("ROCK, PAPER, OR SCISSORS?");
        if (humanChoice == null) {
            continue;
        }
        const choiceInLower = humanChoice.toLowerCase();
        if (options.includes(choiceInLower)) {
            checkFlag = true;
            return choiceInLower;
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "DRAW";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
               (playerSelection == "paper" && computerSelection == "rock") ||
               (playerSelection == "scissors" && computerSelection == "paper")) {
        return "WIN";
    } else {
        return "LOSE";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "DRAW") {
        console.log("No one Wins!!");
    } else if (result == "WIN") {
        console.log("YOU WIN!!");
        humanScore++;
    } else {
        console.log("YOU LOSE!!");
        computerScore++;
    }
}

function game() {
    console.log("WELCOME!");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("----------------------------------------");
    }
    console.log(`Final Score: Human ${humanScore}, Computer ${computerScore}`);
    if(humanScore>conmputerScore)
        {
            console.log("You Win the Game!!!");
        }
    else if(conmputerScore>humanScore)
    {
        console.log("Better Luck next time!")
    }
    else
    {
        console.log("It's a Draw!")
    }
}

game();
