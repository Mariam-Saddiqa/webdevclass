
//concat method

let arr=["mariam",01,"saddiqa",10,"pakistan",91];
let newarr=arr.concat([1,2,"ayra"],"zainab",23)
console.log(newarr)


let arr2=[23,56,89,47,58]//another way of conccat
result=arr.concat(arr2)
console.log(result)

//find method

let user = [
    {id:1, name:"michael"},
    {id:2, name:"jhon"},
    {id:3, name:"lillena"}]
let user1=user.find(value=>(value.id==2)
)
let user2=user.find(function(user){
    return user.id===3;
})
console.log(user1.name)
console.log(user2.name)


