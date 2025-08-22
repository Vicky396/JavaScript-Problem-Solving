// My approach
function repeatString(str,num){
    if(str.length<=0 || num<=0){
        return "Invalid Input"
    }
    let result =""
    while(num>0){
        result+=str;
        num--;
    }
    return result
}

//Solution
const repeatString1 =(str,num)=>{
    return num>0?str.repeat(num):str;
}


console.log(repeatString1('abc',0));
