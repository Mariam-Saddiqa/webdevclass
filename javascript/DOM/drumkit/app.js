//const keys=document.querySelector('keys');
const key=document.querySelectorAll('.key');
var playSound= function(){
var attribute=this.getAttribute("data-key");
console.log(attribute)
var audio=document.getElementsByTagName('audio');
for(i=0; i< audio.length; i++){
audio[i].pause();
audio[i].currentTime=0;

}
document.querySelectorAll('[data-key=attribute]').play();

};
for( var i=0; i< key.length; i++){
    key[i].addEventListener('click',playSound , false);
    }                                                               