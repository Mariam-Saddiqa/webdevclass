const mygetuser= require('./modules/getusers')
const getAdmin=require('./modules/getadmin')

const id=document.querySelector('#id').value;
const admin=document.querySelector('#admin').value;
const button=document.querySelector('.enter')
button.addEventListener(click,getDetails)
const  p=document.querySelector('.details')



function getDetails(id,name){
    if(id){
        mygetuser(id)
.then(data=>{
    console.log(data)
})
p.innerHTML=data;
    }else if(admin){
        getAdmin(admin).then(data=>{
            console.log(data)
        })
        p.innerHTML=data;
    }
}


