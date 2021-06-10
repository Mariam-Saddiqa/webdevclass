var date=new Date();
var day =date.getDay();
var month=date.getMonth();
var year=date.getFullYear();
if (day<10){
    day="0"+day;
}
if(month<10){
    month="0"+month;
}
console.log("Today is:"+day+"-"+month+"-"+year)