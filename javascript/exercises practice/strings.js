//Write a program to check whether a specified character exists within the 2nd to 4th position ina given stri



function checkStr(str , char){
    var ctr=0;
    var str_length=str.length;
    for(var i=0; i<str_length; i++){
        if((str.charAt(i)==char)&&(i>=1 && i<=3)){
            ctr=1;
            break
        } 
        }
        if(ctr==1){
            return true;
        }
        return false;
    }

    checkStr("mariamsdd","d")
    

    //Write a JavaScript program to check whether the last digit of the three given positive integers is same.
    function checkNum(num1,num2,num3){
        if ((num1>0) && num2>0 && num3>0){
            
        }

    }