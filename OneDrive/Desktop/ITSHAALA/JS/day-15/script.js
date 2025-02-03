const options = ["rock", "paper", "scissors"];

function playGame() {
   
    let tempUsersChoice = prompt("Enter your choice")
    console.log(tempUsersChoice); //rock, paper, scissors

    // !null --> true
    // if(tempUserChoice === null || tempUserChoice ===  "")
    if (!tempUsersChoice) {
        alert("Enter valid input");
        playGame();
        return;
    }

    let usersChoice = tempUsersChoice.trim().toLowerCase();
    // computer choice

    let ramdonIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[ramdonIndex];

    console.log("Users choice", usersChoice);

    console.log("Compuers choice", computerChoice);

    // check who win this round

    if ((usersChoice === "rock" && computerChoice === "scissors") ||
        (usersChoice === "paper" && computerChoice === "rock") ||
        (usersChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("Yeah you won the game 🥳🥳....party toh banati hai 💃💃🎉🎊🎊🎊");
   
        
    }
    

    else if ((computerChoice === "rock" && usersChoice === "scissors") ||
        (computerChoice === "paper" && usersChoice === "rock") ||
        (computerChoice === "scissors" && usersChoice === "paper")
    ) {
        alert("Ohh no ... you lost the game 😭");
    
    }
    else if ((computerChoice === "rock" && usersChoice === "rock") ||
        (computerChoice === "paper" && usersChoice === "paper") ||
        (computerChoice === "scissors" && usersChoice === "scissors")
        
    ) {
        alert("It's a draw 😁");

    }

    else {
        alert("Invalid input 😒");
        
    }
    alert("Do you want to play again ")
    while (true) {
        playGame();
        prompt("play again");
}


}


