document.addEventListener('DOMContentLoaded',sessionchecking)


function sessionchecking(){
    setTimeout(function(){
    if(typeof(Storage)!== 'undefined'){
        //alert("Storage is availaible");
        console.log(sessionStorage.getItem('pass'));
        if(sessionStorage.user!== null && sessionStorage.pass!== null){
            //redirect here
            location.href='login.html'
        }else{
            //register
            location.href="register.html";
        }
    }
},5000)
}