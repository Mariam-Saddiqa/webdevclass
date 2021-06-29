//call()//

function vaccineResult(){
    console.log(`name:${this.firstname} got vaccinated\nAge:${this.age}\nDate:${this.date}`)

}
let joe=vaccineResult.call({
    fullname:"joeDalton",
    age:'40',
    date:new Date().getTime()
})

let mike=vaccineResult.call({
    fullname:"mikeDalton",
    age:'42',
    date:new Date().getTime()
})

console.log(joe,"\n",mike)

//apply//

let calculator={
    func:function(a,b){
        return a+b;
    }
}

const res=calculator.func.apply(this,[6,6])
const res1=calculator.func.apply(this,[2,2])

const Person={
    addPerson:function(user,pass,email){
        let response=`user:${this.user}\npass:${this.pass}\nemail:${this.email}`
        return response
    }


}
let newPerson={
    user:"mariam",
    pass:"abcd123",
    email:"mariam@hot.be"
}

let addresponse=Person.addPerson.apply(newPerson)


//bind//

let user={
    username:'joe',
    printUser:function(){
        console.log(`Welcome ${this.username}`)
    }
}
let printer=user.printUser.bind(user);
setTimeout(user.printUser,2000)
setTimeout(printer,2000)  //fails

let Intec=function(){
    console.log("intec",this)
}
let IntecBrussel=Intec.bind([1,2,3])
IntecBrussel();


function showUser(){
    console.log(this)
}

let x=showUser.bind("joe dalton");
x();


const info={
    name:"joe",
    lname:"dalton"
}

const extraInfo={
    job:"robber"
}

const mergeInfo={
    ...info,
    ...extraInfo
}

function Printer{
    console.log(`${this.name}${this.lname}${this.job}`)
}

let cloneOfprinterfenc= Printer.bind(mergeInfo);
cloneOfprinterfenc();