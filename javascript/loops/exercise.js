let numbers=[0,1,2,3,4,5,6,7,8,9,10]
let newnumbers=[];
for ( let i=0;i<numbers.length;i++){
   newnumbers[i]=numbers[i]*100;
  console.log(newnumbers[i])
}
console.log(newnumbers)


let number;
for (let i=1; i<numbers.length; i++){
 number=numbers[i];
 result=Math.pow(2,number)// 1*1+1=2,2*3
console.log(result)
if (result==128){
  break;
}
  
}




for (let value of numbers){
 
  if( value%2==0){
    console.log(value)
  }
}
for(let  value of numbers){
  if(value%2==1){
    console.log(value)
  }
}
let newarr=[];
for(let i=10;i<numbers.length,i--;){
  newarr=numbers[i]
  console.log(newarr);
}

