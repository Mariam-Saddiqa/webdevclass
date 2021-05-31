
let new_date=new Date('June 2, 2021').getTime;


console.log(new_date);


setInterval (function(){
let current_time=new Date().getTime();
console.log(current_time);


var time_left=new_date-current_time;
console.log(time_left);

var days = Math.floor(time_left / 3600)/24;
var hours = Math.floor(time_left /3600)%24;
var minutes = Math.floor(time_left /60)%60;
var seconds = Math.floor(time_left %60);

document.getElementById('time1').innerHTML=days +" "+hours+" "+minutes+" "+seconds;

},1000)

