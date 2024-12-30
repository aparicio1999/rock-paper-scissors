let options = ["rock", "paper", "scissors"];

let humanScore=computerScore=0;

function getComputerChoice() {
    choice = Math.floor(Math.random()*3);
    return options[choice];
}

let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);

let div = document.querySelector("div");

function playRound(e) {
    let humanChoice = e.target.value;
    let computerChoice = getComputerChoice();
    if (humanChoice=="rock") {
        if (computerChoice=="rock") {
            div.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}\nThere's a tie! Both sides chose rock.`;
        } else if (computerChoice=="paper") {
            computerScore++;
            if (computerScore==5) {
                div.textContent = `Too bad! The computer beat you with ${computerScore} against ${humanScore} points.`
                humanScore=computerScore=0;
            } else {
                div.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}\nYou lost this round! Paper beats rock.`;
            }
        } else {
            humanScore++;
            if (humanScore==5) {
                div.textContent = `Congratulations! You beat the computer with ${humanScore} against ${computerScore} points.`
                humanScore=computerScore=0;
            } else {
                div.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}\nYou won this round! Rock beats scissors.`;
            }
        }
    } else if (humanChoice=="paper") {
        if (computerChoice=="rock") {
            humanScore++;
            if (humanScore==5) {
                div.textContent = `Congratulations! You beat the computer with ${humanScore} against ${computerScore} points.`
                humanScore=computerScore=0;
            } else {
                div.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}\nYou won this round! Paper beats rock.`;
            }
        } else if (computerChoice=="paper") {
            div.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}\nThere's a tie! Both sides chose paper.`;
        } else {
            computerScore++;
            if (computerScore==5) {
                div.textContent = `Too bad! The computer beat you with ${computerScore} against ${humanScore} points.`
                humanScore=computerScore=0;
            } else {
                div.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}\nYou lost this round! Scissors beat paper.`;
            }
        } 
    } else {
        if (computerChoice=="rock") {
            computerScore++;
            if (computerScore==5) {
                div.textContent = `Too bad! The computer beat you with ${computerScore} against ${humanScore} points.`
                humanScore=computerScore=0;
            } else {
                div.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}\nYou lost this round! Rock beats scissors.`;
            }
        } else if (computerChoice=="paper") {
            humanScore++;
            if (humanScore==5) {
                div.textContent = `Congratulations! You beat the computer with ${humanScore} against ${computerScore} points.`
                humanScore=computerScore=0;
            } else {
                div.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}\nYou won this round! Scissors beat paper.`;
            }
        } else {
            div.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}\nThere's a tie! Both sides chose scissors.`;
        } 
    }
}