//My Approach 
function truncateString(str,num){
    if(num<=0){
        return str;
    }
// return str.lenghth>num?str.slice(0,num):null;
return str.length>num?str.substring(0,num).concat('...'):null;
}

console.log(truncateString("Vikash Singh", 5));
