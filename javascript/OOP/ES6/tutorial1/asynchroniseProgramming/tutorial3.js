/*let printService= str =>{
    return new Promise((resolve,reject)=>{
        console.log(str)
        resolve(str);
    })
}
PrintService('intecbrussel')
.then(res=>{
    PrintService('intec-1')
    printService('intec-2')
})*/



let students=['student1','student2','student3','student4','yasmine','mariam','barsam'];
let PromiseMe= new Promise((resolve,reject)=>{
    if(students!=null){
        resolve(students.sort())
    }else{
        reject('error!')
    }
})
PromiseMe.then(res=>{
    console.log(res)
    res.forEach(student => {
        console.log(student)
        
    });
})