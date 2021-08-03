const API_URL="https://jsonplaceholder.typicode.com/posts"
const postcontainer=document.querySelector('.posts')
const postTitle=document.querySelector('#post-titlel');
const postBody=document.querySelector('.post-body')


/*fetch(API_URL)
.then(x=>x.json())
.then(data=>{
    console.log(data)
    data.filter(user=>{
        return user.id=10
    })
})*/

const c=t=>document.createElement(t)

window.addEventListener('DOMContentLoaded',event=>{
    //console.log('mariam')
    fetch(API_URL)
    .then(response=>response.json())
    .then(data=>{
        //console.log(data)
        data.map(post=>{
           // console.log(post)
           postOnTitle(post)
        })
    })
})

function postOnTitle(post){
    let a = c('a');
    a.href="#";
    a.className="lead d-block";
    a.setAttribute("data-toggle","modal");
    a.setAttribute('key',post.id);
    a.setAttribute("data-target","#postdetail");
    a.innerText=post.title;
    postcontainer.appendChild(a)

}

async function getSinglePost(id){
    let response= await fetch(`${API_URL}/${id}`)
    console.log(response)
    let data=response.json();
    return data;
}

postcontainer.addEventListener('click',e=>{
    getSinglePost(e.target.getAttribute('key'))
    .then(response=>{
        postTitle.innerHTML=response.title;
        postBody.innerHTML=response.body;
    })
})
