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
    let playerChoice = playerSelection();
    let computerChoice = computerSelection();

    while(playerChoice == -1)
    {
        //make sure we have a valid input.
        playerChoice = playerSelection();
    }

    if(playerChoice == "rock")
    {
        switch(computerChoice)
        {
            case "rock":
                console.log("A tie! You both chose a rock.");
                return 0;
        
            case "paper":
                console.log("You lose! Paper kills the rock.");
                return 0;
        
            case "scissor":
                console.log("You win! Rock is too hard for scissors.");
                return 1;
            default:
                console.log("Something unexpected happened.");
                return 0;
        }
    }
    else if(playerChoice == "paper")
    {
        switch(computerChoice)
        {
            case "rock":
                console.log("You win! Your paper killed the rock!");
                return 1;
        
            case "paper":
                console.log("A tie! You both chose paper.");
                return 0;
        
            case "scissor":
                console.log("You lose! The computer cut your paper.");
                return 0;
            default:
                console.log("Something unexpected happened.");
                return 0;
        }
    }
    else if(playerChoice == "scissor")
    {
        switch(computerChoice)
        {
            case "rock":
                console.log("You lose! The computer's rock is too tough.");
                return 0;
        
            case "paper":
                console.log("You win! You cut the computer's paper!");
                return 1;
        
            case "scissor":
                console.log("A tie! You both chose scissors.");
                return 0;
            default:
                console.log("Something unexpected happened.");
                return 0;
        }
    }
    return 0;
}

function game()
{
    let score = 0;
    for(let i = 0; i < 5; i++)
        score += playRound(playerPlay, computerPlay);
    
    console.log(`Your final score out of 5 is: ${score}.`);
    return score;
}

alert("If you want to play, open the console, and type the following 'game();'\n This will call the main function.");