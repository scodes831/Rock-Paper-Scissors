let playerScore = 0;
                let computerScore = 0;

                playRound();
                playRound();
                playRound();
                playRound();
                playRound();
                finalWinner();

                function playRound() {
                    let playerSelection = prompt("Please make a selection: rock, paper, or scissors.")
                    console.log(playerSelection);
                    const playerSelectionLowerCase = playerSelection.toLowerCase()
                    
                    const choices = ["rock", "paper", "scissors"];
                    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
                    console.log(computerSelection);

                    if (playerSelectionLowerCase === "rock" && computerSelection === "paper") {
                        result = "You lose! Paper beats rock!";
                        computerScore++
                    } 
                    if (playerSelectionLowerCase === "paper" && computerSelection === "rock") {
                        result = "You win! Paper beats rock!";
                        playerScore++
                    } 
                    if (playerSelectionLowerCase === "paper" && computerSelection === "scissors") {
                        result = "You lose! Scissors beats paper!";
                        computerScore++
                    } 
                    if (playerSelectionLowerCase === "scissors" && computerSelection === "paper") {
                        result = "You win! Scissors beats paper!";
                        playerScore++
                    } 
                    if (playerSelectionLowerCase === "scissors" && computerSelection === "rock") {
                        result = "You lose! Rock beats scissors!";
                        computerScore++
                    } 
                    if (playerSelectionLowerCase === "rock" && computerSelection === "scissors") {
                        result = "You win! Rock beats scissors!";
                        playerScore++
                    } 
                    if (playerSelectionLowerCase === computerSelection) {
                        result = "Tie game!";
                    }
                    console.log(result);
                    console.log("Your score is " + playerScore);
                    console.log("Opponent score is " + computerScore);
                }

                function finalWinner() {
                    if (playerScore === computerScore) {
                        result = "Final Result: Tie Game!";
                    }
                    if (playerScore > computerScore) {
                        result = "Final Result: You Win The Game!";
                    }
                    if (playerScore < computerScore) {
                        result = "Final Result: You Lost The Game!"
                    }
                    console.log(result);
                }
            



