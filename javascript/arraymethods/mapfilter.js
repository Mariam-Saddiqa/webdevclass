let student = [
  {
    name: "Ayesha",
    score:[10,10,8,6,5]
  },
  {
    name: "Ayera",
    score: [8,5,3,9,5]
  },
  {
    name: "Ali",
    score: [7,10,9,8,4]
  },

  { name: "Hamza",
    score: [9,10,10,4,5]
  },
  {
    name: "Ahmed",
    score: [3,5,6,8,5]
  },
];
student.reduce(function(total,current){
    
   let newarr =console.log(`TOtal:${total.score}\nCurrent:${current.score}`);
    
    return total.score=+ current.score;
})

result= student.filter(function(x){
    return x.score>=8
})
let newlist=student.map(function(value){
    return value;
    
})
console.log(newlist);
console.log(result);