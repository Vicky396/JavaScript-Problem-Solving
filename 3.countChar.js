//! Task:
//? Write a function called countChar that takes two parameters: a string and a characterto count. The function should return the number of times the specified character appears the string.
// console.log(countChar("Mississippi", "I")); // Output: 4

//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function so accept any character that is part of the ASCII character set and is printable).

// My Approach
const countChar1 = (str,char) =>{
  let count=0;
  for(let i=0;i<str.length;i++){
    if(str[i].toLowerCase()===char.toLowerCase()){
        count++;
    }
    
  }
  return count;
}

// Solution
const countChar2 = (str,char) =>{
    str=str.toLowerCase();
    char=char.toLowerCase();
    count =str.split("").reduce((acc,currChar)=>{
        if(currChar===char){
            acc++;
        }
        return acc;
    },0)
    return count;
  }
console.log(countChar1("MISSISSIPI","i"));
console.log(countChar2("MISSISSIPi","I"));