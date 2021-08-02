class Students{
    constructor(name){
        this.name=name;
    }

    static addStudent(name){

        return name;
    }
    printIt(){
        console.log(Students.addStudent(this.name))
    }

    static show(){
        console.log(`Hello ${this.name}`)
    }
    static show1(name){
        console.log(`Hello ${name}`)
    }
}
class Childclass extends Students{

}

Students.show();
Students.show1();

const st1=new Students("mariam");
//st1.show();
st1.printIt();
console.log(Childclass.addStudent("amna"));