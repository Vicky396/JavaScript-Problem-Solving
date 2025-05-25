// My approach
const startsWith=(str,subStr)=>{
    str=str.toLowerCase();
    subStr=subStr.toLowerCase();
    for(let i=0;i<subStr.length;i++){
        if(str[i]==subStr[i]){
            continue
        }
        return false;
    }
    return true;
}
// predefined method is already there startsWith(str,subStr);

console.log(startsWith("Hello WOrld","hello"))