const showComputerChoice = document.getElementById('computer-choice')
const showPlayerChoice = document.getElementById('player-choice')
const showRoundResult = document.getElementById('round-result')
const showComputerScore = document.getElementById('computer-score')
const showPlayerScore = document.getElementById('player-score')
const buttons = document.querySelectorAll('button')
const choices = ["rock", "paper", "scissors"]
let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0
let result
let finalResult


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playerSelection = e.target.id
        showPlayerChoice.innerHTML = playerSelection
        populateComputerChoice();
        evaluateSelections();
        declareChampion();
    });
});


function populateComputerChoice() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    showComputerChoice.innerHTML = computerSelection
}

function evaluateSelections() {
    if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You lose! Paper beats rock!";
        computerScore++
    } 
    if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You win! Paper beats rock!";
        playerScore++
    } 
    if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose! Scissors beats paper!";
        computerScore++
    } 
    if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You win! Scissors beats paper!";
        playerScore++
    } 
    if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You lose! Rock beats scissors!";
        computerScore++
    } 
    if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You win! Rock beats scissors!";
        playerScore++
    } 
    if (playerSelection === computerSelection) {
        result = "Tie game!";
    }
    console.log(result);
    showRoundResult.innerHTML = result;
    showComputerScore.innerHTML = computerScore
    showPlayerScore.innerHTML = playerScore
}

function declareChampion() {
    if (playerScore === 5) {
        finalResult = "WINNER! Refresh the page for another game.";
    }
    if (computerScore === 5) {
        finalResult = "LOSER! Refresh the page for another game."
    }
    displayFinalMessage();
}

function displayFinalMessage () {
    if (finalResult === "WINNER! Refresh the page for another game." || finalResult === "LOSER! Refresh the page for another game.")
        alert(finalResult);
}
              
            



