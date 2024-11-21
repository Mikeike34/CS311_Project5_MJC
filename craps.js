
let rollResult;
let counter = 0;
let walletPrice = 100.00;
let currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
let wallet = currency.format(walletPrice);
let bet;
let point;

//display variable
let walletDisplay = document.getElementById("bank");
let walletText = document.createTextNode(wallet);
walletDisplay.appendChild(walletText);




//rolls the dice on the screen and calculates the result of the roll
function rollDice(){
    let dice1 = Math.floor(Math.random()*6) +1;
    let dice2 = Math.floor(Math.random()*6) +1;
    let dice1Image;
    let dice2Image;
    if(walletPrice = 0.00){
        let popUp = document.getElementById("myPopup");
        let text = document.createTextNode("Sorry you do not have the funds to play.");
        popUp.appendChild(text);
        popUp.classList.toggle("show");
    }
    else{ 
        try{
            switch(dice1){
                case 1:
                    dice1Image = document.getElementById("dice1");
                    dice1Image.src = "dice1.png";
                    break;
                case 2:
                    dice1Image = document.getElementById("dice1");
                    dice1Image.src = "dice2.png";
                    break;
                case 3:
                    dice1Image = document.getElementById("dice1");
                    dice1Image.src = "dice3.png";
                    break;
                case 4:
                    dice1Image = document.getElementById("dice1");
                    dice1Image.src = "dice4.png";
                    break;
                case 5:
                    dice1Image = document.getElementById("dice1");
                    dice1Image.src = "dice5.png";
                    break;
                case 6:
                    dice1Image = document.getElementById("dice1");
                    dice1Image.src = "dice6.png";
                    break;
                default:
                    dice1Image = document.getElementById("dice1");
                    dice1Image.src = "dice1.png";
                    break;
            }//end switch
        }//end try
        catch(err){
            document.getElementById("dice1").innerHTML = err.message;
        }//end catch

        try{
            switch(dice2){
                case 1:
                    dice1Image = document.getElementById("dice2");
                    dice1Image.src = "dice1.png";
                    break;
                case 2:
                    dice1Image = document.getElementById("dice2");
                    dice1Image.src = "dice2.png";
                    break;
                case 3:
                    dice1Image = document.getElementById("dice2");
                    dice1Image.src = "dice3.png";
                    break;
                case 4:
                    dice1Image = document.getElementById("dice2");
                    dice1Image.src = "dice4.png";
                    break;
                case 5:
                    dice1Image = document.getElementById("dice2");
                    dice1Image.src = "dice5.png";
                    break;
                case 6:
                    dice1Image = document.getElementById("dice2");
                    dice1Image.src = "dice6.png";
                    break;
                default:
                    dice1Image = document.getElementById("dice2");
                    dice1Image.src = "dice1.png";
                    break;
            }//end switch
        }//end try
        catch(err){
            document.getElementById("dice2").innerHTML = err.message;
        }//end catch
        rollResult = dice1 + dice2;
    }//end else

}//end rollDice


//checks the result of roll and the number of rolls that have been made to calculate the outcome of the game.
function outcome(){
    if((counter == 1 && rollResult == 7) || (counter == 1 && rollResult == 11)){
        let popUp = document.getElementById("myPopup");
        popUp.innerHTML = "Great first roll! \nYou Win!";
        popUp.classList.toggle("show");
        setTimeout(() => {popUp.classList.toggle("show");}, 5000);
        //walletPrice = walletPrice + bet;
        wallet = currency.format(walletPrice);
        walletDisplay = document.getElementById("bank").innerHTML = "Bank: "+ walletPrice;
        counter = 0;
        bet = 0;
    }//end if
    else if((counter == 1 && rollResult == 2) || (counter == 1 && rollResult == 3) || (counter ==1 && rollResult == 12)){
        let popUp = document.getElementById("myPopup");
        popUp.innerHTML = "Craps! \nYou Lose!";
        popUp.classList.toggle("show");
        setTimeout(() => {popUp.classList.toggle("show");}, 5000);
        walletPrice = walletPrice - bet;
        walletText = document.createTextNode("Bank: "+ wallet);
        walletDisplay = document.getElementById("bank").innerHTML = walletText;
        counter = 0;
        bet = 0;
    }//end else if
    else if ((counter == 1 && rollResult == 4) || (counter == 1 && rollResult == 5) || (counter == 1 && rollResult == 6) || (counter == 1 && rollResult == 8) || (counter == 1 && rollResult == 9) || (counter == 1 && rollResult == 10)){
        point = rollResult;
        let pointDisplay =document.getElementById("point");
        let pointText = document.createTextNode("Point: "+ point);
        pointDisplay.appendChild(pointText);
    }//end else if
    else if(count > 1 && rollResult == point){
        let popUp = document.getElementById("myPopup");
        popUp.innerHTML = "You made your point! \nYou Win!";
        popUp.classList.toggle("show");
        setTimeout(() => {popUp.classList.toggle("show");}, 5000);
        walletPrice = walletPrice + bet;
        wallet = currency.format(walletPrice);
        walletDisplay = document.getElementById("bank");
        walletText = document.createTextNode("Bank: "+ wallet);
        walletDisplay.appendChild(walletText);
        counter = 0;
        let pointDisplay =document.getElementById("point");
        let pointText = document.createTextNode("Point: ");
        pointDisplay.appendChild(pointText);
    }//end else if
    else if(count > 1 && rollResult == 7){
        let popUp = document.getElementById("myPopup");
        popUp.innerHTML = "Craps! \nYou Lose!";
        popUp.classList.toggle("show");
        setTimeout(() => {popUp.classList.toggle("show");}, 5000);
        walletPrice = walletPrice - bet;
        wallet = currency.format(walletPrice);
        walletDisplay = document.getElementById("bank");
        walletText = document.createTextNode("Bank: "+ wallet);
        walletDisplay.appendChild(walletText);
        counter = 0;
        let pointDisplay =document.getElementById("point");
        let pointText = document.createTextNode("Point: ");
        pointDisplay.appendChild(pointText);
    }//end else if
}//end outcome

//place bet function
function placeBet(){
    if(counter < 1){
    bet = parseInt(document.getElementById('bet').value);
    }
}//end placeBet


//runs the methods in appropriate order and checks for correct bet.
function calculate_score(){
    
   try{
        if(bet <= walletPrice){
            counter++;
            rollDice();
            outcome();
        }
        else{
            let popUp = document.getElementById("myPopup");
            popUp.innerHTML = "Invalid Bet. \nPlease enter a numerical value that you can afford";
            popUp.classList.toggle("show");
            bet.value = 0;
            setTimeout(() => {popUp.classList.toggle("show");}, 5000);
        }

   }//end try
   catch(err){
    document.getElementById("bet").innerHTML = err.message;
   }//end catch


}