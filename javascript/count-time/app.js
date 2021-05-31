let new_date = new Date('2021-06-02');

console.log(new_date);

let count=document.getElementById("time1")
setInterval(function () {
  let current_time = new Date();
  console.log(current_time);
 

  let time_left = new_date - current_time;
  console.log(time_left);
  let days = Math.floor(time_left / (1000*60*60*24));
  let hours = Math.floor(time_left / 3600) % 24;
  let minutes = Math.floor(time_left / 60) % 60;
  let seconds = Math.floor(time_left % 60);
  count.innerHTML=`${days},${hours},${minutes},${seconds}`
  
}, 1000);
