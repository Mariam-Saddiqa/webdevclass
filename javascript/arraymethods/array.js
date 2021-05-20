let fruits=['bnanaa','orange','apple'];
let fruity=new Array('banaa','peer','druiven');


fruits[2]='strawberry';
console.log(fruits)


for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}
console.log(fruits.toString())
console.log(fruits.join('--'))
console.log(fruits.pop(),fruits)
console.log(fruits.push('blackberries'),fruits);
console.log(fruits.shift())
fruits.unshift('kiwi');
console.log(fruits)

let vegetables= ['tomatao','potato','brocolli']
console.log(fruits.concat(vegetables))
console.log(vegetables.slice(0,2))
console.log(vegetables.reverse())
console.log(fruits.sort())


let numbers=[23,45,86,1,2,5,6,96,15,12,]
console.log(numbers.sort(function(a,b){return a-b;})) //ascending order
console.log(numbers.sort(function(a,b){return b-a;})) // descending order



let emptyArray= new Array();
for(let i=0; i<10; i++){
    emptyArray.push(i);
}
console.log(emptyArray);

