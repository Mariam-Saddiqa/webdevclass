const city=document.querySelector('.city');
const btn=document.querySelector('.submit')
const searchCity=document.querySelector('#input')
const description=document.querySelector('.description')
const table=document.querySelector('table')
const pressure=table.children[0].children[0].children[1];
const humidity=table.children[0].children[1].children[1];
const wind=table.children[0].children[2].children[1]
const temprature=document.querySelector('.temp');
const icon=document.querySelector('.icon').children[0];





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
            description.innerHTML=res.weather.description;
            pressure.innerHTML=res.main.pressure;
            humidity.innerHTML=res.main.humidity;
            wind.innerHTML=res.wind.speed;
            let temp=res.main.temp;
            temprature.childNodes[1].innerHTML=getTemp(temp);
           let iconid=res.weather.icon;
           icon.src="https://openweathermap.org/img/wn/"+iconid+"@2x.png"
           document.body.style.backgroundImage="url('https://www.google.com/search?q= "+ searchCity + "bm=isch&ved=2ahUKEwiU9vz5g5ryAhUWybsIHVqXAHsQ2-cCegQIABAA&oq=tokyo&gs_lcp=CgNpbWcQAzIECAAQQzIHCAAQsQMQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgQIABBDOgQIIxAnOgcIIxDqAhAnUIqvA1i21ANgzdcDaAFwAHgCgAFiiAG1EJIBAjMwmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=Z-0LYdSmGZaS7_UP2q6C2Ac&bih=1274&biw=1186&prmd=isnv')"
           //icon.innerHTML=`<img src="icons/${iconElement}.png"/>`&t
        })
    }
})


function getTemp(data){
    let c;
    let k=data;
    c=k-273;
    return Math.trunc((c));
}

