/*var btn=document.querySelector('button');
btn.style.background='seagreen';
btn.style.fontFamily='sans'
btn.style.color="pink";*/

//document.querySelector('.card-body:nth-child(2)').style.background='yellow'

var card=document.querySelectorAll('.card-body')[1];
var x=card.children[8];
x.style.color="yellow";
x.style.background="green";
console.log(x)

var group=document.querySelector('ul');

var li=document.createElement('li');
li.className="list-group-item d-flex justify-content-between";
li.textContent="My todo title new";
var a=document.createElement('a');
a.className="delete-item"
var i=document.createElement('i');
i.className="fa fa-remove";
a.appendChild(i);

li.appendChild(a);
group.appendChild(li);
console.log(group)