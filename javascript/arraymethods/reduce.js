let numbers = [5, 6, 9, 10, 25];
let sum = numbers.reduce(myReducefunction);

function myReducefunction(total, value, index, array) {
  return total + value;
}

console.log(sum);

//adding salaries

let employees = [
  { name: "Ahmed", salary: 500 },
  { name: "Ali", salary: 300 },
  { name: "Ayesha", salary: 250 },
  { name: "George", salary: 450 },
];
let Totalexpense = employees.reduce((acc, current) => {
  return acc + current.salary;
}, 0);
console.log(Totalexpense);
//ad string
let String = ["Hello", "Its", "Reduce", "Method"];
let Sentence = String.reduce(myFunction);

function myFunction(acc, cu) {
  return acc + " " + cu;
}
console.log(Sentence);
//add second item of each index
var data = [
  ["1236584", "25"],
  ["26587564", "53"],
  ["659856", "58"],
];
let total = data.reduce(function (initial, next) {
  return initial + next[0][1];
}, 0);

console.log(total);

//find average

let number=[25,28,96,45,75,26]
let average=number.reduce((total,value,index,arrayitself)=>{
    total+=value;
    if(index===arrayitself.length-1){
        return total/arrayitself.length-1
    }else{
        return total;
    }
})
console.log(average)
// doubling an array

let array=[29.8,25,96,12]

let doubleArray=array.reduce((total,value)=>{
    total.push(value*2);
    return total;
},[])
console.log(doubleArray);


