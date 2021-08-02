/*fetch("https://jsonplaceholder.typicode.com/comments")
.then(res=>{
    //console.log(res)
    //retrieve data here and convert to json
    return res.json();
    //return res;  not in readable form
})
.then(data=>{
    console.log(data)
})*/

let output=document.querySelector('#output')
async function getAllComments(){
    let res = await fetch("https://jsonplaceholder.typicode.com/comments")
    return res.json();
}

/*getAllComments()
.then(res=>{
    console.log(res)
})*/


function readComment (arr){
    arr.forEach(comment=>{
        //console.log(comment)
        output.innerHTML+=`<p>${comment.name}</p>\n`
    });
}
document.querySelector('button').addEventListener('click',e=>{
    e.preventDefault()
    getAllComments()
    .then(res=>{
        //console.log(res)
        readComment(res)
    })
})
//console.log(getAllComments())