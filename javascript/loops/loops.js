let student=[
    {name:'mariam',
     age:29},
     {name:'Barsam',
     age:30},
     {name:'lalena',
     age:25},
     {name:'yasmine',
     age:28}]

     for(let person of student){
         console.log(person)
         person.email="root@root.com"
     }
     console.log(student)


     let students=['mariam','ali','ayesha','ahmed','atif']
     for(let [index,name] of students.entries()){
         console.log(`index:${index}\nname:${name}`)
     }

for (let[name] of students){
    console.log(name)
}
let schoolName="INTECBRUSSEL";
let newpattern=""
for(let letter of schoolName ){
    console.log(letter)
    newpattern+=letter+":"
}

let newstr=newpattern.split("")
newstr.pop()
newpattern=newstr.join("")






     