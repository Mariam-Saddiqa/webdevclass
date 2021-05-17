let student = [
  {
    name: "Ayesha",
    score: 10,
  },
  {
    name: "Ayera",
    score: 8,
  },
  {
    name: "Ali",
    score: 7,
  },

  { name: "Hamza",
    score: 9
  },
  {
    name: "Ahmed",
    score: 3,
  },
];
result= student.filter(function(x){
    return x.score>=8
})
let newlist=student.map(function(value,index,array){
    return value;
    
})
console.log(newlist);
console.log(result);