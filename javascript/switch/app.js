function getDayName(dayNum){
    var day;
    switch(dayNum){
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            
    }
    return day;
}
getDayName(2);

document.write(getDayName(2))

