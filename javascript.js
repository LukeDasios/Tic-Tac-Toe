//Variables declaration - 1 per square slot -> for changing the background color of the selected squares
const squareZero = document.getElementById('squareZero');
const squareOne = document.getElementById('squareOne');
const squareTwo = document.getElementById('squareTwo');
const squareThree = document.getElementById('squareThree');
const squareFour = document.getElementById('squareFour');
const squareFive = document.getElementById('squareFive');
const squareSix = document.getElementById('squareSix');
const squareSeven = document.getElementById('squareSeven');
const squareEight = document.getElementById('squareEight');

const matchResult = document.getElementById('match-result')

const playAgainButton = document.getElementById("play-again");

const valueGrid = [squareZero, squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight];

let startValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//Values start at 0, are changed throughout the game
let gameGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let turn = 0;
let game = true; 

let assignedSquares; 


//For the scoreboard
let playerOneWins = 0;
let playerTwoWins = 0;

const playerOneScore = document.getElementById('p-one-score');
const playerTwoScore = document.getElementById('p-two-score');

//Button onclick
function buttonZeroClick() {
    if(squareZero.classList.contains("x") || squareZero.classList.contains("o")) {
        //If the square already has an x or o class assigned to it, clicking the button does nothing
    }
    else {
        if(turn === 0) {
            squareZero.classList.add("x");
            turn = 1;
        } else if (turn === 1){
            squareZero.classList.add("o");
            turn = 0;
        } 
        gameGrid[0] = 1; 
        gameEnd();
    }   
}

function buttonOneClick() {
    if(squareOne.classList.contains("x") || squareOne.classList.contains("o")) {
        //If the square already has an x or o class assigned to it, clicking the button does nothing
    }
    else {
        if(turn === 0) {
            squareOne.classList.add("x");
            turn = 1;
        } else if (turn === 1){
            squareOne.classList.add("o");
            turn = 0;
        } 
        gameGrid[1] = 1; 
        gameEnd();
    }
}

function buttonTwoClick() {
    if(squareTwo.classList.contains("x") || squareTwo.classList.contains("o")) {
        //If the square already has an x or o class assigned to it, clicking the button does nothing
    }
    else {
        if(turn === 0) {
            squareTwo.classList.add("x");
            turn = 1;
        } else if (turn === 1){
            squareTwo.classList.add("o");
            turn = 0;
        } 
        gameGrid[2] = 1; 
        gameEnd();
    }
}

function buttonThreeClick() {
    if(squareThree.classList.contains("x") || squareThree.classList.contains("o")) {
        //If the square already has an x or o class assigned to it, clicking the button does nothing
    }
    else {
        if(turn === 0) {
            squareThree.classList.add("x");
            turn = 1;
        } else if (turn === 1){
            squareThree.classList.add("o");
            turn = 0;
        } 
        gameGrid[3] = 1; 
        gameEnd();
    }
}

function buttonFourClick() {
    if(squareFour.classList.contains("x") || squareFour.classList.contains("o")) {
        //If the square already has an x or o class assigned to it, clicking the button does nothing
    }
    else {
        if(turn === 0) {
            squareFour.classList.add("x");
            turn = 1;
        } else if (turn === 1){
            squareFour.classList.add("o");
            turn = 0;
        } 
        gameGrid[4] = 1; 
        gameEnd();
    } 
}

function buttonFiveClick() {
    if(squareFive.classList.contains("x") || squareFive.classList.contains("o")) {
        //If the square already has an x or o class assigned to it, clicking the button does nothing
    }
    else {
        if(turn === 0) {
            squareFive.classList.add("x");
            turn = 1;
        } else if (turn === 1){
            squareFive.classList.add("o");
            turn = 0;
        }
        gameGrid[5] = 1; 
        gameEnd(); 
    }
    
}

function buttonSixClick() {
    if(squareSix.classList.contains("x") || squareSix.classList.contains("o")) {
        //If the square already has an x or o class assigned to it, clicking the button does nothing
    }
    else {
        if(turn === 0) {
            squareSix.classList.add("x");
            turn = 1;
        } else if (turn === 1){
            squareSix.classList.add("o");
            turn = 0;
        } 
        gameGrid[6] = 1; 
        gameEnd();
    }
    
}

function buttonSevenClick() {
    if(squareSeven.classList.contains("x") || squareSeven.classList.contains("o")) {
        //If the square already has an x or o class assigned to it, clicking the button does nothing
    }
    else {
        if(turn === 0) {
            squareSeven.classList.add("x");
            turn = 1;
        } else if (turn === 1){
            squareSeven.classList.add("o");
            turn = 0;
        } 
        gameGrid[7] = 1; 
        gameEnd();
    }  
    
} 

function buttonEightClick() {
    if(squareEight.classList.contains("x") || squareEight.classList.contains("o")) {
        //If the square already has an x or o class assigned to it, clicking the button does nothing
    }
    else {
        if(turn === 0) {
            squareEight.classList.add("x");
            turn = 1;
        } else if (turn === 1){
            squareEight.classList.add("o");
            turn = 0;
        } 
        gameGrid[8] = 1; 
        gameEnd();
    }
    
}







    //Button onmouseenter
    function buttonZeroEnter() {
        if(squareZero.classList.contains("x") || squareZero.classList.contains("o")) {
            //If the square is either an x or a y, don't ever change it's background color
        }
        else {
              //When you mouseover a square, it changes to the color that it would be in the case that you choose to select it
                if (turn === 0){
                    squareZero.classList.add('temp-x');
                } else if (turn === 1){
                    squareZero.classList.add('temp-o');
                }
        }
    }

    function buttonOneEnter() {
        if(squareOne.classList.contains("x") || squareOne.classList.contains("o")) {
            //If the square is either an x or a y, don't ever change it's background color
        }
        else {
              //When you mouseover a square, it changes to the color that it would be in the case that you choose to select it
                if (turn === 0){
                    squareOne.classList.add('temp-x');
                } else if (turn === 1){
                    squareOne.classList.add('temp-o');
                }
        }
    }

    function buttonTwoEnter() {
        if(squareTwo.classList.contains("x") || squareTwo.classList.contains("o")) {
            //If the square is either an x or a y, don't ever change it's background color
        }
        else {
              //When you mouseover a square, it changes to the color that it would be in the case that you choose to select it
                if (turn === 0){
                    squareTwo.classList.add('temp-x');
                } else if (turn === 1){
                    squareTwo.classList.add('temp-o');
                }
        }
    }

    function buttonThreeEnter() {
        if(squareThree.classList.contains("x") || squareThree.classList.contains("o")) {
            //If the square is either an x or a y, don't ever change it's background color
        }
        else {
              //When you mouseover a square, it changes to the color that it would be in the case that you choose to select it
                if (turn === 0){
                    squareThree.classList.add('temp-x');
                } else if (turn === 1){
                    squareThree.classList.add('temp-o');
                }
        }
    }

    function buttonFourEnter() {
        if(squareFour.classList.contains("x") || squareFour.classList.contains("o")) {
            //If the square is either an x or a y, don't ever change it's background color
        }
        else {
              //When you mouseover a square, it changes to the color that it would be in the case that you choose to select it
                if (turn === 0){
                    squareFour.classList.add('temp-x');
                } else if (turn === 1){
                    squareFour.classList.add('temp-o');
                }
        }
    }

    function buttonFiveEnter() {
        if(squareFive.classList.contains("x") || squareFive.classList.contains("o")) {
            //If the square is either an x or a y, don't ever change it's background color
        }
        else {
              //When you mouseover a square, it changes to the color that it would be in the case that you choose to select it
                if (turn === 0){
                    squareFive.classList.add('temp-x');
                } else if (turn === 1){
                    squareFive.classList.add('temp-o');
                }
        }
    }

    function buttonSixEnter() {
        if(squareSix.classList.contains("x") || squareSix.classList.contains("o")) {
            //If the square is either an x or a y, don't ever change it's background color
        }
        else {
              //When you mouseover a square, it changes to the color that it would be in the case that you choose to select it
                if (turn === 0){
                    squareSix.classList.add('temp-x');
                } else if (turn === 1){
                    squareSix.classList.add('temp-o');
                }
        }
    }

    function buttonSevenEnter() {
        if(squareSeven.classList.contains("x") || squareSeven.classList.contains("o")) {
            //If the square is either an x or a y, don't ever change it's background color
        }
        else {
              //When you mouseover a square, it changes to the color that it would be in the case that you choose to select it
                if (turn === 0){
                    squareSeven.classList.add('temp-x');
                } else if (turn === 1){
                    squareSeven.classList.add('temp-o');
                }
        }
    }

    function buttonEightEnter() {
        if(squareEight.classList.contains("x") || squareEight.classList.contains("o")) {
            //If the square is either an x or a y, don't ever change it's background color
        }
        else {
              //When you mouseover a square, it changes to the color that it would be in the case that you choose to select it
                if (turn === 0){
                    squareEight.classList.add('temp-x');
                } else if (turn === 1){
                    squareEight.classList.add('temp-o');
                }
        }
    }




    //Button onmouseleave
    function buttonZeroLeave() {
            //When you mouseleave a square, it returns to its default background color
            if (turn === 0){
                squareZero.classList.remove('temp-x');
            } else if (turn === 1){
                squareZero.classList.remove('temp-o');
            }
    }

    function buttonOneLeave() {
        //When you mouseleave a square, it returns to its default background color
        if (turn === 0){
            squareOne.classList.remove('temp-x');
        } else if (turn === 1){
            squareOne.classList.remove('temp-o');
        }
}

    function buttonTwoLeave() {
    //When you mouseleave a square, it returns to its default background color
    if (turn === 0){
        squareTwo.classList.remove('temp-x');
    } else if (turn === 1){
        squareTwo.classList.remove('temp-o');
    }
}

    function buttonThreeLeave() {
    //When you mouseleave a square, it returns to its default background color
    if (turn === 0){
        squareThree.classList.remove('temp-x');
    } else if (turn === 1){
        squareThree.classList.remove('temp-o');
    }
}

    function buttonFourLeave() {
    //When you mouseleave a square, it returns to its default background color
    if (turn === 0){
        squareFour.classList.remove('temp-x');
    } else if (turn === 1){
        squareFour.classList.remove('temp-o');
    }
}

function buttonFiveLeave() {
    //When you mouseleave a square, it returns to its default background color
    if (turn === 0){
        squareFive.classList.remove('temp-x');
    } else if (turn === 1){
        squareFive.classList.remove('temp-o');
    }
}

function buttonSixLeave() {
    //When you mouseleave a square, it returns to its default background color
    if (turn === 0){
        squareSix.classList.remove('temp-x');
    } else if (turn === 1){
        squareSix.classList.remove('temp-o');
    }
}

function buttonSevenLeave() {
    //When you mouseleave a square, it returns to its default background color
    if (turn === 0){
        squareSeven.classList.remove('temp-x');
    } else if (turn === 1){
        squareSeven.classList.remove('temp-o');
    }
}

function buttonEightLeave() {
    //When you mouseleave a square, it returns to its default background color
    if (turn === 0){
        squareEight.classList.remove('temp-x');
    } else if (turn === 1){
        squareEight.classList.remove('temp-o');
    }
}



















//Function that determines if the game is over - goes through all the possible win conditions for both x and o
function gameEnd() {

    //OlayerOne's win conditions 
    if (squareZero.classList.contains("x") && squareOne.classList.contains('x') && squareTwo.classList.contains("x") || squareThree.classList.contains("x") && squareFour.classList.contains("x") && squareFive.classList.contains("x") || squareSix.classList.contains("x") && squareSeven.classList.contains("x") && squareEight.classList.contains("x") || squareZero.classList.contains("x") && squareThree.classList.contains("x") && squareSix.classList.contains("x") || squareOne.classList.contains("x") && squareFour.classList.contains("x") && squareSeven.classList.contains("x") || squareTwo.classList.contains("x") && squareFive.classList.contains("x") && squareEight.classList.contains("x") || squareZero.classList.contains("x") && squareFour.classList.contains("x") && squareEight.classList.contains("x") || squareTwo.classList.contains("x") && squareFour.classList.contains("x") && squareSix.classList.contains("x")) {
    
        playerOneWins = playerOneWins + 1;

        //Displays match result
        matchResult.innerHTML = "Player One Wins!";

        //Updates the scoreboard
        scoreboard();

        //PlayerOne wins
        game = false;

        //Set turn back to 0 (Player one always goes first)
        turn = 0;

        //Allows the user to see and press the "play again" button
        playAgainButton.classList.add("play-again-active");
        
                for(let i = 0; i < valueGrid.length; i++) {
                    //Sets the background colors of the squares back to white
                    valueGrid[i].classList.add('default');
                    valueGrid[i].classList.remove('default');
                }
                
    } 
     //PlayerTwo's win conditions
    else if (squareZero.classList.contains("o") && squareOne.classList.contains('o') && squareTwo.classList.contains("o") || squareThree.classList.contains("o") && squareFour.classList.contains("o") && squareFive.classList.contains("o") || squareSix.classList.contains("o") && squareSeven.classList.contains("o") && squareEight.classList.contains("o") || squareZero.classList.contains("o") && squareThree.classList.contains("o") && squareSix.classList.contains("o") || squareOne.classList.contains("o") && squareFour.classList.contains("o") && squareSeven.classList.contains("o") || squareTwo.classList.contains("o") && squareFive.classList.contains("o") && squareEight.classList.contains("o") || squareZero.classList.contains("o") && squareFour.classList.contains("o") && squareEight.classList.contains("o") || squareTwo.classList.contains("o") && squareFour.classList.contains("o") && squareSix.classList.contains("o")) {

        playerTwoWins = playerTwoWins + 1;

        //Displays match result
        matchResult.innerHTML = "Player Two Wins!";

        //Updates the scoreboard
        scoreboard();

         //Set turn back to 0 (Player one always goes first)
        turn = 0;

        //PlayerTwo wins
        game = false; 

         //Allows the user to see and press the "play again" button
        playAgainButton.classList.add("play-again-active");
    
                for(let i = 0; i < valueGrid.length; i++) {
                    //Sets the background colors of the squares back to white
                    valueGrid[i].classList.add('default');
                    valueGrid[i].classList.remove('default');
                }
                
    }
    
    else {
        
        if(gameGrid[0] === 1 && gameGrid[1] === 1 && gameGrid[2] === 1 && gameGrid[3] === 1 && gameGrid[4] === 1 && gameGrid[5] === 1 && gameGrid[6] === 1 && gameGrid[7] === 1 && gameGrid[8] === 1) {
                //All the grid squares have been filled and there are no winners, the game is drawn
                game = false;

                 //Displays match result
                matchResult.innerHTML = "It's a Draw!";

                 //Allows the user to see and press the "play again" button
                playAgainButton.classList.add("play-again-active");
                
                for(let i = 0; i < valueGrid.length; i++) {
                    //Sets the background colors of the squares back to white
                    valueGrid[i].classList.add('default');
                    valueGrid[i].classList.remove('default');
                }
                


        } else{
            //If there isn't a draw, do nothing
        }
    
    }

}



//updates the scoreaboard
function scoreboard() {
    playerOneScore.innerHTML = playerOneWins;
    playerTwoScore.innerHTML = playerTwoWins; 
}



//Game gets restarted if player press "play again"  
function gameRestart() {
    //Removes all "x" and "o" classes of the grid
    
    
    for (let i = 0; i < valueGrid.length; i++) {
        if(valueGrid[i].classList.contains('x')) {
            valueGrid[i].classList.remove('x');

        } else if (valueGrid[i].classList.contains('o')){
            valueGrid[i].classList.remove('o');
        } 
        valueGrid[i].classList.remove('temp-x');
        valueGrid[i].classList.remove('temp-o');
        gameGrid[i] = 0;
        console.log(valueGrid[i]);
    }
    
    matchResult.innerHTML = "";
    playAgainButton.classList.remove("play-again-active");
    playAgainButton.classList.add("play-again-invisible");
    game = true;

}

