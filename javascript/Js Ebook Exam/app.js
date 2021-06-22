//selectors

var book_name=document.getElementById('book_name');
var book_author=document.getElementById('book_author');
var book_category=document.getElementById('book_category');
var book_date=document.getElementById('book_date')
var price=document.getElementById('price');

var add_bookbtn=document.querySelector('.addbookbtn');
var table_body=document.querySelector('tbody');
var div=document.querySelector('.booklist').lastElementChild;
//var delete_all=document.querySelector('.btn btn-primary btn-sm w-100 bg-danger rounded-0');

//Event listener

add_bookbtn.addEventListener("click", addNewBook);
div.addEventListener("click",deleteAllBook)

let index=0;

//functions

function addNewBook(){
    
    index++;
    let row=document.createElement('tr');
    let th=document.createElement('th');
    th.setAttribute("scope","row");
    let node=document.createTextNode(index);
    th.appendChild(node);
    row.appendChild(th)
    
    let td_name=document.createElement('td');
    let nameNode=document.createTextNode(book_name.value);
    td_name.appendChild(nameNode)
    row.appendChild(td_name)
    
    let td_authour=document.createElement('td');
    let authorNode=document.createTextNode(book_author.value);
    td_authour.appendChild(authorNode);
    row.appendChild(td_authour);
    
    let td_topic=document.createElement('td');
    let topicNode=document.createTextNode(book_category.value);
    td_topic.appendChild(topicNode);
    row.appendChild(td_topic)
    
    let td_date=document.createElement('td');
    let dateNode=document.createTextNode(book_date.value);
    td_date.appendChild(dateNode);
    row.appendChild(td_date);
    
    let td_price=document.createElement('td');
    let priceNode=document.createTextNode(price.value);
    let i=document.createElement('i');
    i.className="fa fa-eur";
    i.setAttribute("aria-hidden","true");
    td_price.appendChild(priceNode)
    td_price.appendChild(i);
    row.appendChild(td_price)

    let td_remove=document.createElement('td');
    let a=document.createElement('a');
    a.href="#";
    let x=document.createElement('i');
    x.className="fa fa-trash lead";
    x.setAttribute("aria-hidden","true");

    //event listener delete item

    x.addEventListener('click',()=>{
        x.parentNode.parentNode.parentNode.remove();
    })
    a.appendChild(x);
    td_remove.appendChild(a);
    row.appendChild(td_remove);
   
    table_body.appendChild(row);
    
   

}

//delet library

function deleteAllBook(event){
   
    table_body.innerHTML="";

 
 }

 






