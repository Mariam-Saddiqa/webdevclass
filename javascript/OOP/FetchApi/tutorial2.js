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
    let nArr= arr.filter(el=>{
        return el.address.city==="McKenziehaven";
    })

    nArr.forEach(user => {
         let p=document.createElement('p') 
         p.innerHTML+=`${user.name}`
         output.appendChild(p);
         
    })
}

/*function showModal(user){
    let modal=document.createElement('div');
    modal.className="modal-body";
    modal.textContent+=user;
    body.appendChild(modal);

}*/






