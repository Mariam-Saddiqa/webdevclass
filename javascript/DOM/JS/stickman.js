var left = 0,
    id = setInterval(goRight, 10); 
    ed;

function goRight() {
    var redpixel = document.getElementById("moving");
    left++;
    redpixel.style.left = left + "px";
    redpixel.style.transform='scaleX(-1)'
    if (left > 1200) {
        clearInterval(id);
        ed = setInterval(goLeft, 10);
           
        
    }
}

function goLeft() {
    var redpixel = document.getElementById("moving");
    left -= 1;
    redpixel.style.left = left + "px";
    redpixel.style.transform='rotate(360deg)'
    if (left < 1) {
        
        clearInterval(ed);
        id = setInterval(goRight, 10);
    }
}