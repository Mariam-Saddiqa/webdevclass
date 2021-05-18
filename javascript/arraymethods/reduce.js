let numbers=[5,6,9,10,25];
let sum= numbers.reduce(myReducefunction)

function myReducefunction(total,value,index,array){
    return total+value
}
cpnsole.log('sum');
