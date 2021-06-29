
let submit=document.querySelector('button');
submit.addEventListener("click", addToSessionStorage);

function addToSessionStorage(){
let user_name=document.getElementById('username').value;
let password=document.getElementById('Password1').value;
let email=document.getElementById('Email1').value;
    
    if(typeof(Storage)!=='undefined'){
        sessionStorage.setItem("user", user_name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("pass", password);

        }
    location.href="login.html"
}