const title=document.querySelector('#title')
const cardColumns=document.querySelector('.card-columns').firstElementChild
//DOMcontentLoaded


let users=[{
    id:1,
    user:'root',
    pass:'root123'
},
{
    id:2,
    user:'root2',
    pass:'root123'

}]
function loadUser(){
    console.log(user)

}
document.addEventListener('DOMcontentLOader',loadUser)
document.addEventListener('DOMcontentLOader',()=> console.log('hello'))

//focus event

title.addEventListener('focus',function(e){
    console.log('hello')
    console.log(e.target)
    e.target.classList.add('bg-dark')
    e.target.classList.add('text-warning')
})

//blur

title.addEventListener('blur',function(e){
    console.log('this is blur event')
    e.target.classList.remove('bg-dark')
    e.target.classList.remove('text-warning')
    e.target.classList.add('bg-light')
    e.target.classList.add('text-dark')
})

//select

title.addEventListener('select',function(event){
    console.log('hello this is select action.selected')
    console.log(event.target.value)
    console.log(cardColumns)
    cardColumns.childNodes[3].childNodes[3].textContent=event.target.value
})
//le.log(cardColumns.childNodes[3].childNodes[3])


//copy

title.addEventListener('copy',function(e){
    console.log('data copied')
    alertMessage.style.display='block'
    setTimeout(function(){
        alertMessage.style.display='none'

    },2000)
})


//paste event

title.addEventListener('paste',function(e){
console.log('input data pasted')

})


//cut
title.addEventListener('cut',function(e){
    console.log('cut event')
})



//input

title.addEventListener('input',function(e){
    console.log("user is writting something")
})