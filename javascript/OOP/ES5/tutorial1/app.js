// new name()//
 
//gular function but we can create a unique object by this constructor//

/*function Movies(id,title){
    console.log('hello constructor');
    this.id=id;     //we are sending parameters to global objects//
    this.title=title;
//we can also add more function //
    this.printMovie=function(){
        console.log(`Movie title is ${this.title}`)
    }

}

let movie1=new Movies(1,'notebook');
let movie2=new Movies(2, 'walk to remeber')

Movies.testMethod=function(){
    console.log('hello movie')
}


movie1.printMovie();
movie2.printMovie();
Movies.testMethod();
//console.log(typeof movie2)   //result in console : Movies { id: 1, title: 'notebook' } , its an object//

let myNewObj={
    id:1,
    user:'root',
    print:function(){
        console.log(this.user)
    }
}

myNewObj.print();
myNewObj.testProp='it works';
console.log(myNewObj)*/

//make constructor for todo project//

/*function todo(id,title,location){
        this.id=id;
        this.title=title;
        this.date=new Date();
        this.location=location;
        this.todos=[];

        this.addtodo=function(){
            let todo={
                id:this.id,
                title:this.title,
                location:this.location,
                date:this.date
            }
            ;
            return this.todos.push(todo);
        }
        this.printTodo= function(){
            console.log(this.todos)
            return this.todos
        }

}

let task1=new todo(1,'learn JS','intecbrussel');
let task2=new todo(2,'learn PHP','intecbrussel')
task1.addtodo();
task1.printTodo();
task2.addtodo();
task2.printTodo();*/


let list_group=document.querySelector('.list-group');


function Todo(){
    this.todos=[];
    this.addTodo=function(id,title,location){
        let todo={
            id:id,
            title:title,
            location:location,
            date:new Date()

        }
        this.todos.push(todo)
    }
    this.showTodo=function(){
        console.log(this.todos)
        return this.todos
    }
    this.printTodos=function(){
        let liElement=document.createRange().createContextualFragment(`<li class="list-group-item"></li>`)
          this.todos.forEach(todo=>{
        console.log(todo)
           liElement.textContent=todo.title;
           list_group.innerHTML+=`<li class="list-group-item active m-1">${todo.title}</li>`
           list_group.appendChild(liElement)     
        })
    }
}
let todo=new Todo();
todo.addTodo(1,'learn JS','IntectBrusseL');
todo.addTodo(2,' learn PHP','IntecBrussel')
todo.addTodo(3,'learn React','intecbrussel')
todo.showTodo();
todo.printTodos();