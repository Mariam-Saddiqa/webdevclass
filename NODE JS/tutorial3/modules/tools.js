let tools={getname:function(name){
    console.log(`my name is ${name}`)
},
getsumofNumbers:function(a,b){
    let result=a+b;
    console.log(`result is ${result}`)
},
getStudentNames:function(...arg){
    arg.forEach(name=>{
        console.log(`students :${name}`)
    })
}

}
module.exports=tools
