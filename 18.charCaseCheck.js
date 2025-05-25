const isUpperCase =(char)=>{
    if(char.charCodeAt(0)>= 65 && char.charCodeAt(0)<= 90){
        return true;
    }
    return false;
    // char ===char.toUpperCase()
}

const isLowerCase=(char)=>{
    if(char===char.toLowerCase()){
        return true;
    }
    return false;
}

console.log(isUpperCase('S'));
console.log(isLowerCase('s'));