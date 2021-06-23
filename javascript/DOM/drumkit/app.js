window.addEventListener('keydown', function(e){

    //select corresponding audio
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    //select corresponding key
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)

    if (!audio){
      return //stop the function from running all together
    }
    audio.currentTime = 0 // rewind to the start
    audio.play()
    key.classList.add('playing')
    
  })

