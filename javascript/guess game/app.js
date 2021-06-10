var ranNum=Math.floor((Math.random()*100)+1);//create random number
var lastGuess=document.getElementById('preGuess');
 var lowHigh =document.getElementById("numbLwHg");
var maxGuess=10;
var counter=1;
document.getElementById('EnterBtn').onclick = function (){
    var guess = document.getElementById('num').value;
  if(counter===1){
    lastGuess.textContent='Previous Guess:'
  }
  lastGuess.textcontent+=guess+' ';
  if(guess===ranNum){
    lowHigh.textContent="You guessed right";
     lowHigh.style.background="green"
     gameOver();
  }else if(counter===10){
    lowHigh.textContent="Game Over"
    gameOver();
  } 
  else{ 
    lowHigh.textContent="Wrong";
    
   if (guess>ranNum)
  {
  lowHigh.textContent="Number is high";
  
    }
    else if (guess<ranNum){
  lowHigh.textContent="Number is Low";
  } 
      }
  counter++;
}
             

