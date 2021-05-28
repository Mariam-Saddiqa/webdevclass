function rollDice(){
    var randomNum1=Math.floor(Math.random()*6)+1;
     var randomNum2=Math.floor(Math.random()*6)+1;
    document.getElementById('placeholder1').innerHTML=randomNum1;
    document.getElementById('placeholder2').innerHTML=randomNum2;
    
    if(randomNum1==randomNum2){
      document.getElementById('diceRoll').innerHTML="DRAW"
    }
    else if (randomNum1>randomNum2){
      document.getElementById('diceRoll').innerHTML="PLAYER1 WINS"
    }else{
      document.getElementById('diceRoll').innerHTML="PLAYER2 WINS"
    }
    
  }
  
  