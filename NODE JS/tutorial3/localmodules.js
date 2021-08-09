const myCustommodule= require('./modules/hello')
const{getname,getsumofNumbers,getStudentNames}=require('./modules/tools')
const getAllUsers=require('./modules/getUsers')
const singelUser=require('./modules/getsingleuser')

myCustommodule('Joe Dalton')
getname('Mike')
getsumofNumbers(5,9)
/*getStudentNames(['joe','mike','dalton'])
getAllUsers().then(data=>{
    console.log(data)
})*/
singelUser(2).then(data=>{
    console.log(data)
})