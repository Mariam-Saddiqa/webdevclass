let user = [];

user.push(adduser(1, "mariam", "mariam@hotmail.be", 1233));
user.push(adduser(2, "Jhon", "John@gmail.be", 1233));
user.push(adduser(3, "Lalena", "Lalena@hotmail.be", 1233));
user.push(adduser(4, "Marcio", "Marcio@hotmail.be", 1233));
user.push(adduser(5, "Frank", "Frank@hotmail.be", 1233));

function adduser(id, fullname, email, password) {
  let obj = {
    id: id,
    fullname: fullname,
    email: email,
    password: password,
  };
  return obj;
  
}
console.log(user)




user.forEach(function getuser(user){
    let id=user.id;
    let fullname=user.fullname;
    let email=user.email;
    
    console.log(`Id: ${id}\nFullname: ${fullname}\nEmail: ${email} `)

})








function getSortedUsersByName(a,b) {
     
   
  if ( a.fullname<b.fullname) {
    return-1;
  }
  else if (a.fullname >b.fullname) {
    return 1;
  }else{
  return 0;
  }


}
user.sort(getSortedUsersByName)
console.log(user);




let obj=user.find(ser=>ser.fullname==="Jhon")
console.log(obj)



var id;
var index = user
  .map(function deleteUserById(x) {
    return x.Id;
  })
  .indexOf(id);

user.splice(index, 1);
console.log(user)
