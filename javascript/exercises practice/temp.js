/*Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C*/

//(30°C x 1.8) + 32 = 86°F
//(50°F - 32) x .5556 = 10°C
function getFarhenheit(){
  var input=document.querySelector('.temp').value; 
   var result=document.querySelector('.result');
   result.innerHTML=(input*1.8)+32;
}

function getCelcius(){
    var input=document.querySelector('.temp').value; 
     var result=document.querySelector('.result1');
     result.innerHTML=(input-32)*0.5556;
  }


  console.log(document.URL) // give url of a web page loaded.
