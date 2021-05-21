let student={
    first:'rafay',
    last:'ahmed',
    age:20,
    height:170,

    studentinfo : function(){
        return this.first+' '+this.last+'\n'+this.age;
    }

};

student.age++;
console.log(student.studentinfo())