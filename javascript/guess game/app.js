var ranNum=Math.floor(Math.random()*100)+1;
console.log(ranNum);

function getNum(){
  
  for(var i=10; i>0; i--){
  var userNum=document.getElementById('num').value;
  if (userNum>ranNum)
  {
  document.getElementById("numbLwHg").innerHTML="Number is high";
    }
    else if (userNum<ranNum){
  document.getElementById("numbLwHg").innerHTML="Number is Low";
  }
    else if(ranNum==userNum){
    document.getElementById("numbLwHg").innerHTML="You guessed right";
  }
  
  document.getElementById("leftAtt").innerHTML="You have" +i+ "attempt left"; 
    
  }
}
