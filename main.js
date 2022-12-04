
    //Function to get user input and store it in string variable playerSelection

    let winner=0;
    function getPlayerChoice() {

        //input a string varible playerSelection to get rock/paper/scissor from user.
        let playerSelection = "";
        //playerSelection=prompt("Enter Rock, Paper or Scissors: ")
        
        //make it case-sensitive by capitalizing
    
        //playerSelection=playerSelection.charAt(0).toLocaleUpperCase()+playerSelection.slice(1,playerSelection.length).toLocaleLowerCase();
        let rock=document.getElementById("Rock");
        let paper=document.getElementById("Paper");
        let scissor=document.getElementById("Scissor");

        rock.addEventListener("click", function() {
            playRound("Rock", getComputerChoice());
        });
        paper.addEventListener("click", function() {
            playRound("Paper", getComputerChoice());
        });
        scissor.addEventListener("click", function() {
            playRound("Scissors", getComputerChoice());
        });
    }

    //function getComputerChoice () to randomly return a string value computerChoice from rock/paper/scissor.
    function getComputerChoice() {
        
        let computerChoice="";
        let choice=-1;
        choice=Math.floor(Math.random()*3);
        if (choice==0) {
            computerChoice="Rock";
        } else if (choice==1) {
            computerChoice="Paper";
        } else {
            computerChoice="Scissors";
        }
        return computerChoice;

    }

    //Function to compare playerSelection with computerChoice and update didUserWin
    function playRound(playerSelection, computerChoice) {

    //two strings one to show win/lose, another to display who beats who
    let str1=""
    let str2=""
    //variable to store who the didUserWin in integer.
    let didUserWin=0;
    //Rock beats scissors, scissors beat paper, and paper beats rock

        if (playerSelection=="Rock") {
            if (computerChoice=="Scissors") {
                didUserWin=1;
                winner=winner+1;
                str2="Rock beats Scissors";
                }
            else {
                didUserWin=0;
                str2="Paper beats Rock";
            }
        }
        if (playerSelection=="Paper") {
            if (computerChoice=="Scissors") {
                didUserWin=0;
                str2="Scissor beats Paper";
                }
            else {
                didUserWin=1;
                winner=winner+1;
                str2="Paper beats Rock";
            }
        }
        if (playerSelection=="Scissors") {
            if (computerChoice=="Rock") {
                didUserWin=0;
                str2="Rock beats Scissors";
                }
            else {
                didUserWin=1;
                winner=winner+1;
                str2="Scissor beats Paper";
            }
        }
    
    //if users loses print "You Lose! Paper beats Rock", if win "You Win! Rock beats Scissor"
    if (didUserWin==1)
        str1="You Win! ";
    else 
        str1="You Lose! ";
    
    str3=", current score :";
    game=document.getElementById("game");
    game.textContent=str1+str2+str3+winner;
    
    if (winner==5){
        win=document.getElementById("winner");
        win.textContent="You won the war with computer by 5 point";
    }
    return null;
    }
      //create function game(), from where playRound should be called 5 times in loop
    function game() {
            let a=getPlayerChoice();
        }
    game();