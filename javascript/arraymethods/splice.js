
//splice array method


let arr=["i","am","studing","javascript"];
//arr.splice(1,2); just remove item from array



//after removing adding 3 more element in array
arr.splice(0,3,"mariam","is","liking")
console.log(arr)


//insert an element using splice

let array=["i","am","studing","javascript"];
array.splice(2,0,"mariam","saddiqa")
console.log(array)

//insert at -index

let arrayn=["i",2,"studing",5,"javascript"];
arrayn.splice(-1,0,"5","8") //index -1 from the last index of the array
console.log(arrayn)


//slice method

let arraynum=["1","2","3","4","5","6"]
//let newarr=arraynum.slice(1,2)
let newarr=arraynum.slice(-2) //gave -2index it will remove values from the end
console.log(newarr)