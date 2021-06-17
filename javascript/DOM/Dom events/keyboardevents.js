const title=document.querySelector('#title')
let name=""
//keypress event
function keyPresseventCallback(event){
    //console.log(event.key)
    name+=event.key;
    console.log(name)
}
//keydown
title.addEventListener('keydown',keyPresseventCallback)
//title.addEventListener('keypress',keyPresseventCallback)
//keyup
title.addEventListener('keyup',keyPresseventCallback)