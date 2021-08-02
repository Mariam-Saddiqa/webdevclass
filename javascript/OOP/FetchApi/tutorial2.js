async function getAllUsers(){
    let res=await fetch("https://jsonplaceholder.typicode.com/users")
    return res.json();
}
let output=document.querySelector('#output');

let button=document.querySelector('button').addEventListener('click',e=>{
    e.preventDefault();
    getAllUsers()
    .then(res=>{
        getUserName(res)
    })
});


function getUserName(arr){
    
        let newarry=arr.filter(user=>{
             return user.city=="McKenziehaven";
            
        })
        console.log(newarry)
        
        newarry.forEach(user => {
            output.innerHTML+=`<p>${user.name}</p>\n`
        })
}





