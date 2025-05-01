/*

Programming Question: Hash Tag Generator
You are required to implement a function generateHash that generates a hash tag from a given input string.
The hash tag should be constructed as follows:
The input string should be converted to a hash tag format, where each word is capitalized and concatenated
together without spaces.
 If the length of the input string is greater than 280 characters or if the input string is empty or
contains only whitespace, the function should return false.
 Otherwise, the function should return the generated hash tag prefixed with #.
Write a function generateHash to accomplish this task.
console.log(generateHash("my name is thapa technical"));
o/p = "#MyNameIsThapaTechnical"
*/
 
// My Approach
const generateHash1 =(str) =>{
    if(str.length >280 || str.trim().length===0){
        return false;
    }
    let words = str.split(" ");
    words ="#"+ words.map((word)=>word.charAt(0).toUpperCase()+ word.slice(1)).join("");
    return words;
}

// Solution
const generateHash2 =(str) =>{
    if(str.length >280 || str.trim().length===0){
        return false;
    }
    let words = str.split(" ");
    words =`#${words.map((word)=>word.replace(word[0],word[0].toUpperCase())).join("")}`; 
    return words;
}

console.log(generateHash1("my name is vikash singh"));
console.log(generateHash2("my name is vikash singh"));