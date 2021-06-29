//console.log(typeof sessionStorage.userData);

//console.log(JSON.parse(sessionStorage.userData))

const [username,password]=document.querySelectorAll('input')
const submitBtn=document.querySelector('button');
submitBtn.addEventListener("click",checkAuth)

function checkAuth(event){
    event.preventDefault();
    console.log('testing')
    if(typeof(Storage)!=='undefined'){
        if(sessionStorage.user==username.value && sessionStorage.pass
            ==password.value){

                let cookieExpire=new Date(2021,12,1);
                document.cookie=`name=${username.value};expires=${cookieExpire.toUTCString}`;
                
                location.href="dashboard.html";
            }else{
                ('Username or password is incorrect.Please try again!')
            }
    }
}
console.log(username,password)


//generate cookie 
