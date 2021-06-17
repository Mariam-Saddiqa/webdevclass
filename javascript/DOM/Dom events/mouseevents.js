const cardColumns=document.querySelectorAll('.card-columns')
const title=document.querySelector('#title')

cardColumns.forEach(element=>{
//console.log(element)

//click

//element.addEventListener('run',runApp)

//doubleclick

//element.addEventListener('dbclick',runApp)

//mouse down

//element.addEventListener('mousedown',runApp)

//mouse up

//element.addEventListener('mouseup',runApp)

//mouse over event

//element.addEventListener('mouseover',runApp)

//mouse out

element.addEventListener('mouseout',runApp)

})
//title.addEventListener('mousedown',runApp)
//title.addEventListener('mouseup',runApp)


function runApp(e){
    console.log('hello',e.target)
}