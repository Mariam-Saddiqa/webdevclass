const firstName = document.querySelector("#name");
const lastName = document.querySelector("#nameLast");
const addres = document.querySelector("#addres");
const email = document.querySelector("#email");
const api = "http://localhost:3001/users";
const button = document
  .querySelector("button")
const update=document.querySelector('.btn btn-primary');
const datadelete=document.querySelector('.btn btn-danger')
  


fetch(api)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });


button.addEventListener("click", postRequest);
function postRequest(e) {
  e.preventDefault();
  let newuser = {
    NameF: firstName.value,
    nameL: lastName.value,
    address: addres.value,
    userEmail: email.value,
  };

fetch(api,{
    method:'post',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(newuser)
}).then(res=>console.log(res))

}
update.addEventListener('click',e=>{
    e.preventDefault();
    let updateUser={
    NameF: firstName.value,
    nameL: lastName.value,
    address: addres.value,
    userEmail: email.value,
    }
    fetch(`${api}/3`,{
        method:'PUT',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(updateUser)
    }).then(res=>{
        console.log(res)
    })
})

datadelete.addEventListener('click',e=>{
    e.preventDefault();
    fetch(`${api}/5`,{
        method:'DELETE'
    }).then(res=>{
        console.log(res)
    })
})
