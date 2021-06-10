/*To determine whether a year is a leap year, follow these steps:

If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
The year is a leap year (it has 366 days).
The year is not a leap year (it has 365 days)*/

var date=new Date();
var year=date.getFullYear();
var leapyear;
//console.log(year);
if (year%2==0){
    if(year%100==0){
        if(year%400==0){
        
        }else{
            leapyear="this is not a leap year";
        }
    }else{
        leapyear="this is a leap year";
    }
}else{
    leapyear="not a leap year";
}
console.log(leapyear)