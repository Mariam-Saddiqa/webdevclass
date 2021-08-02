//Callback hell
const user={
    id:1,
    name:'mariam'
}
const friends=[{id:2,name:'amna'},{id:3,name:'ayesha'}]
const getUser=()=>{
    return new Promise((resolve,reject)=>{
        resolve(user)
    })
}
const printFriends=id=>{
    return new Promise((resolve,reject)=>{
        resolve(friends)
    })
}
let id;
getUser.then(function(u){
    console.log(id);
    printFriends(id).then(function(friends){
        console.log(friends)
    })
})




//Promise Chain.
getUser();

// Async-Await