let choices = ["rock", "paper", "scissor"];

function computerPlay()
{
    let x = choices[Math.floor(Math.random() * choices.length)];
    return x;
}

function playerPlay()
{
    let x = prompt("Enter your choice (Either Rock, Paper, or Scissor): ").toLowerCase();
    
    if(!choices.includes(x))
    {
        console.log("enter a valid input!");
        return -1;
    }
    else
    {
        return x;
    }
}

function playRound(playerSelection, computerSelection)
{
    let playerChoice = playerSelection;
    let computerChoice = computerSelection();


    if(playerChoice == "rock")
    {
        switch(computerChoice)
        {
            case "rock":
                return 0;
        
            case "paper":
                return 0;
        
            case "scissor":
                return 1;
        }
    }
    else if(playerChoice == "paper")
    {
        switch(computerChoice)
        {
            case "rock":
                return 1;
        
            case "paper":
                return 0;
        
            case "scissor":
                return 0;
        }
    }
    else if(playerChoice == "scissor")
    {
        switch(computerChoice)
        {
            case "rock":
                return 0;
        
            case "paper":
                return 1;
        
            case "scissor":
                return 0;
        }
    }
    return 0;
}

let buttons = document.querySelectorAll("button");
let rounds = 5;
let playerScore = 0;
let computerScore = 0;
let playerScorePara = document.getElementById("playerScore");
let computerScorePara = document.getElementById("computerScore");
let playAgainWrapper = document.getElementsByClassName("playAgainWrapper")[0];


buttons.forEach(btn =>
    {
        btn.addEventListener("click", event =>
        {
            if(event.target.textContent == "Rock")
            {
                if(playRound("rock", computerPlay) == 0)
                {
                    computerScore++;
                }
                else
                {
                    playerScore++;
                }
                update();
            }
            else if(event.target.textContent == "Paper")
            {
                if(playRound("paper", computerPlay) == 0)
                {
                    computerScore++;
                }
                else
                {
                    playerScore++;
                }
                update();
            }
            else if(event.target.textContent == "Scissor")
            {
                if(playRound("scissor", computerPlay) == 0)
                {
                    computerScore++;
                }
                else
                {
                    playerScore++;
                }
                update();
            }
        })
    });

function update()
{
    playerScorePara.textContent = `Your score is: ${playerScore}`;
    computerScorePara.textContent = `Computer score is: ${computerScore}`; 
    rounds--;

    if(rounds <= 0)
    {
        updateDisplay();
        updateButtons();
        rounds = 5;
    }
}

function updateDisplay()
{
    let message = document.createElement("p");
    let display = document.getElementById("display");
    playerScorePara.style.display = "none";
    computerScorePara.style.display = "none";
    
    //no need to worry about having a tie, because 5 isn't divisible by 2.
    if(playerScore > computerScore)
    {
        message.textContent = "You won!";
    }
    else if(playerScore < computerScore)
    {
        message.textContent = "You lost :(";
    }
    display.appendChild(message);
}



function updateButtons()
{
    //prevent continuous clicking on the buttons while game is over.
    buttons.forEach(btn =>
        {
            btn.style.display = "none";
        });
        

    let playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again?";

    //display the button a little below the other buttons so that 
    //we don't accidentally click it.
    playAgainBtn.style.marginTop = "50px";
    
    playAgainBtn.addEventListener("click", event =>
    {
        playerScore = 0;
        computerScore = 0;
        playerScorePara.textContent = "Your score is: 0";
        computerScorePara.textContent = "Computer score is : 0";
        playAgainWrapper.removeChild(playAgainBtn);


        buttons.forEach(btn =>
            {
                btn.style.display = "";
            });
            
        let display = document.getElementById("display");
        display.lastChild.remove();
        playerScorePara.style.display = "";
        computerScorePara.style.display = "";
    });

    playAgainWrapper.appendChild(playAgainBtn);
}

