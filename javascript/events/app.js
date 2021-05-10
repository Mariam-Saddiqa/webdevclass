const user= document.getElementById('user')
const pass=document.getElementById('pass')
console.log(user,pass)


let i= 0
function clickEventFunction(){
    i=i+1
    let userx = {
                 id:i,
                 user:user.value,
                 pass:pass.value
           }
            console.log(userx)
}