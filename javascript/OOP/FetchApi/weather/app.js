const city=document.querySelector('.city');
const btn=document.querySelector('.submit')
const searchCity=document.querySelector('#input')
const description=document.querySelector('.description')
const table=document.querySelector('table')
const pressure=table.children[0].children[0].children[1];
const humidity=table.children[0].children[1].children[1];
const wind=table.children[0].children[2].children[1]
const temprature=document.querySelector('.temp');





async function getData(input){
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=c504ef99e5726b8a74e868c60111d24a')
    let data=response.json();
    
    return data;
   

}
btn.addEventListener('click',e=>{
    e.preventDefault();
    if(searchCity.value !=""){
        getData(searchCity.value)
        .then(res=>{
            console.log(res)
            city.innerHTML=res.name;
            description.innerHTML=res.weather[0].description;
            pressure.innerHTML=res.main.pressure;
            humidity.innerHTML=res.main.humidity;
            wind.innerHTML=res.wind.speed;
            let temp=res.main.temp;
    temprature.childNodes[1].innerHTML=getTemp(temp);
        })
    }
})

function getTemp(data){
    let c;
    let k=data;
    c=k-273;
    return c;
}

