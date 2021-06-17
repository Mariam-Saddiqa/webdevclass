//const keys=document.querySelector('keys');
let audio=document.querySelectorAll('audio');
function playAudio(key){
    audio.forEach(audio=>{
        let audioKey=audio.getAttribute('data-key');
        if(audioKey==key){
            audio.play();
        }
    }
        )
}
document.querySelectorAll('.key').forEach(btn=>{
    let audioKey=btn.getAttribute('data-key');
    btn.addEventListener('clcik',function(e){
        console.log(e.target.parentElement)
        playAudio(audioKey);
    })
})