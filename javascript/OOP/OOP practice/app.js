/*function Person(name,age){
    this.name=name;
    this.age=age;
    this.greeting=function() {
        console.log('Hi! I\'m ' + this.name+this.age + '.')
    };
}
let person1=new Person("jhon", 25);
let person2=new Person("Mariam",23)

console.log(person1.name);
person2.greeting();*/

function Person(first,last,age,gender,interest){
    this.name={
        first:first,
        last:last
    };
    this.age=age;
    this.gender=gender;
    this.interest=interest;
    this.bio=function(){
        alert("I am"+this.name.first+".")
    }
}

let person1=new Person("Bob","smith",25,"male",['painting','music'])
console.log(person1['age']);
console.log(person1.interest[1]);
person1.bio();



