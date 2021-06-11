var left = 0;
var id = setInterval(goRight, 10); //execute code after every 10 miliseconds(function , time) 1000=1sec
var ed;

function goRight() {
    var stickman = document.getElementById("moving");
    left++;
    stickman.style.left = left + "px";
    stickman.style.transform='scaleX(-1)'
    if (left > 1200) {
        clearInterval(id);   //stops the execution of code
        ed = setInterval(goLeft, 10);
           
        
    }
}

function goLeft() {
    var stickman = document.getElementById("moving");
    left -= 1;
    stickman.style.left = left + "px";
    stickman.style.transform='rotate(360deg)'
    if (left < 1) {
        
        clearInterval(ed);
        id = setInterval(goRight, 10);
    }
}