
for(var i=2021; i<=2050; i++){
    var day=new Date('January 1,'+i);//i is year ,0
    if(day.getDay()==0){
        console.log("the day is sunday in "+i)

    }
}