var left = 0,
    id = setInterval(goRight, 10); 
    ed;

function goRight() {
    var stickman = document.getElementById("moving");
    left++;
    stickman.style.left = left + "px";
    stickman.style.transform='scaleX(-1)'
    if (left > 1200) {
        clearInterval(id);
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