/*var btn=document.querySelector('button');
btn.style.background='seagreen';
btn.style.fontFamily='sans'
btn.style.color="pink";

//document.querySelector('.card-body:nth-child(2)').style.background='yellow'

/*var card=document.querySelectorAll('.card-body')[1];
var x=card.children[8];
x.style.color="yellow";
x.style.background="green";
console.log(x)*/
function addTodoList(){
    
var inputValue=document.getElementById('todo').value;
var inputDate=document.getElementById('datepicker-input').value;
var group=document.querySelector('.list-group');

var li=document.createElement('li');
li.className="list-group-item";
li.textContent=inputValue+inputDate;
var a=document.createElement('a');
a.className="delete-item"
a.href="#";
var i=document.createElement('i');
i.className="fa fa-remove";
a.appendChild(i);
i.addEventListener("click", deleteItem)
li.appendChild(a);
group.appendChild(li);
}

function deleteTodo(){
    document.getElementById('list').innerHTML="";
}
function deleteItem(){
    document.querySelector('.list-group-item').remove();
}


/*

//var inputValue=document.getElementById('todo').value;
//var inputDate=document.getElementById('datepicker-input').value;
//var listItem=document.querySelector('.list-group-item');


function addTodoList(){
    //
    //var listItem=document.querySelector('.list-group-item');
     var p=document.createElement('p');
     var node=document.createTextNode(inputValue+inputDate);
     p.appendChild(node);
     var a = document.querySelector('.delete-item')
    var parent=a.parentNode;
    console.log(inputValue)
     parent.insertBefore(p , a);//
     
}*/

