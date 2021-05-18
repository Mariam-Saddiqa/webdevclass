let number= [21,25,26,23,1,0,6,8]
let newarr=number.filter(value=>{
    return value>20;
}).map((value) => {
    
       return value*2;
    
    
   })


console.log(newarr)

//reverse aray
let numb=[1,2,3,4,5]
let reversArr=numb.reverse().map(num=>num*2);
console.log(numb);
console.log(reversArr);
