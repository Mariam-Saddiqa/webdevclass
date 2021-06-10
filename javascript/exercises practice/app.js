//Write a JavaScript program to display the current day and time in the following format.  Go to the editor
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38
var today=new Date();
var day=today.getDay();
var days=["Monday","tuesday","Wednesday","Thusrday","Friday","Saturday","Sunday",]
var currentday=days[day-1];

var hours=today.getHours();
var minutes=today.getMinutes();
var seconds=today.getSeconds();
var prepend=(hours>12) ? "PM ": "AM";
hours=(hours>12) ? hours-12 : hours;
console.log("current time is: "+ hours+prepend+":" +minutes+":"+seconds)
