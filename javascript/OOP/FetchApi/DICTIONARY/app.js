//API SERVICE: https://dictionaryapi.dev/ > no need api key
// Example request : https://api.dictionaryapi.dev/api/v2/entries/en/hello


const button=document.querySelector('button')


button.addEventListener('click',getMeaning)
const audio=document.querySelector('#play-pause-button')

 

function getMeaning(){

const input=document.querySelector('#search').value
const api_key="https://api.dictionaryapi.dev/api/v2/entries/en/"+input+"";


fetch(api_key)
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.querySelector('h3').innerHTML=input;
    document.querySelector('.pronunciation-text').innerHTML=data[0].phonetics[0].text;
    document.querySelector('.definition').children[0].innerHTML=data[0].meanings[0].definitions[0].definition;
    document.querySelector('.example').innerHTML=data[0].meanings[0].definitions[0].example
    let mp3_link=data[0].phonetics[0].audio;
    audio.addEventListener('click',data=>{
        
        var audio = new Audio(mp3_link);
        audio.play();
    })
})


}


