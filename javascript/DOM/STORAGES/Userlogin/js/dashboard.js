let btn=document.querySelector('a');
btn.addEventListener("click",clearSessionStorage);

function clearSessionStorage(){
    sessionStorage.clear();
    location.href="login.html"
}