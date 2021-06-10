function getDifference(num1){
    var num2=13;
    var result;
    
    if (num1>13){
        result=num1-num2;
        result= Math.pow(result,2)
    }
    else{
        result=num2-num1;
    }

}


//Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50
function getAddition(num1,num2){
  if(num1+num2==50 || (num1==50||num2==50 ) ){
      return true;
      
  }
  else{
      return false;
  }

}


//Write a JavaScript program to create a new string adding "Py" in front of a given string.
//If the given string begins with "Py" then return the original string.
function addString(str){
    var newStr="";
    if(str[0]==="P" && str[1]==="y"){ // str.substring(0,2)==='Py'
      return str;
    }else{
          newStr=`Py${str}`;
    }
}

//Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

function specString(str,charat){
    var str1=str.substring(0,charat)
    var str2=str.substring(charat+1,str.length)
    return(str1+str2);
}
//Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1