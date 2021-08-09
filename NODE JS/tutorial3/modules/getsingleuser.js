const fetch=require('node-fetch')
module.exports=async(id)=>{
    let res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    let data=res.json()
    return data;
}